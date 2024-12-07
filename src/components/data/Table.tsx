import React from 'react';

import {
    TableWrapper,
    TableHeader,
    HeaderWrapper,
    HeaderText,
    SortSpan,
    TableRow,
    TableData,
} from './styles';

import { useTheme } from '../../themeContext';

export interface TableProps {
    headers: headerType[];
    data: any[][];
    totalRow?: boolean;
    totalColumn?: boolean;
    totalRowLabel?: string;
    totalColumnLabel?: string;
    style?: tableStyle;
    size: sizes;
}

export const Table: React.FC<TableProps> = ({
    headers,
    data,
    totalRow = false,
    style = 'normal',
    size = 'small',
}: TableProps) => {
    const { theme } = useTheme();
    const [sortedData, setSortedData] = React.useState<any[][]>(data);
    const [sortedBy, setSortedBy] = React.useState<{
        index: number;
        order: 'asc' | 'desc';
    }>({
        index: -1,
        order: 'asc',
    });

    const totalColumns = React.useMemo(() => {
        let totalColumns = Array.from({ length: headers.length }).map(() => 0);
        data.forEach((row) => {
            row.forEach((column, index) => {
                totalColumns[index] += Number(column);
            });
        });
        return totalColumns;
    }, [data]);
    const handleSort = React.useCallback(
        (index: number) => {
            if (typeof headers[index] === 'string') {
                return;
            }
            const order = sortedBy.order === 'asc' ? 'desc' : 'asc';
            const sorted = [...sortedData].sort((a, b) => {
                const aValue = a[index];
                const bValue = b[index];
                if (aValue < bValue) return order === 'asc' ? -1 : 1;
                if (aValue > bValue) return order === 'asc' ? 1 : -1;
                return 0;
            });
            setSortedData(sorted);
            setSortedBy({ index, order });
        },
        [sortedData],
    );
    return (
        <TableWrapper $size={size} theme={theme}>
            <TableHeader $size={size} theme={theme}>
                <tr>
                    {headers.map((header, index) => (
                        <HeaderWrapper
                            key={index}
                            $size={size}
                            $position={
                                index === 0
                                    ? 'start'
                                    : index === headers.length - 1
                                      ? 'end'
                                      : null
                            }
                            theme={theme}
                            onClick={() => handleSort(index)}
                        >
                            <HeaderText $size={size} theme={theme}>
                                {typeof header === 'string'
                                    ? header
                                    : header.key}
                                {sortedBy.index === index && (
                                    <SortSpan $size={size} theme={theme}>
                                        {sortedBy.order === 'asc' ? '▲' : '▼'}
                                    </SortSpan>
                                )}
                            </HeaderText>
                        </HeaderWrapper>
                    ))}
                </tr>
            </TableHeader>
            <tbody>
                {sortedData.map((row, rowIndex) => (
                    <TableRow key={rowIndex} $style={style} theme={theme}>
                        {row.map((cell, colIndex) => (
                            <TableData
                                key={colIndex}
                                $size={size}
                                $last={
                                    !totalRow &&
                                    rowIndex === sortedData.length - 1
                                }
                                $position={
                                    colIndex === 0
                                        ? 'start'
                                        : colIndex === headers.length - 1
                                          ? 'end'
                                          : null
                                }
                                theme={theme}
                            >
                                {cell}
                            </TableData>
                        ))}
                    </TableRow>
                ))}
                {totalRow && (
                    <TableRow $style={style} theme={theme}>
                        {totalColumns.map((total, index) => (
                            <TableData
                                key={index}
                                $size={size}
                                $last={true}
                                $position={
                                    index === 0
                                        ? 'start'
                                        : index === headers.length - 1
                                          ? 'end'
                                          : null
                                }
                                theme={theme}
                            >
                                {total || ''}
                            </TableData>
                        ))}
                    </TableRow>
                )}
            </tbody>
        </TableWrapper>
    );
};
