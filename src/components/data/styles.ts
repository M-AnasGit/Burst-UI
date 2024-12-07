import styled from "styled-components";

// Table Wrappers

export const TableWrapper = styled.table<{ $size: sizes }>`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const TableHeader = styled.thead<{ $size: sizes }>`
    background-color: ${({ theme }) => theme.colors.background.active};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    text-align: left;
`;

export const HeaderWrapper = styled.th<{
  $size: sizes;
  $position: "end" | "start" | null;
}>
`

    padding: ${({ theme, $size }) => theme.spacing[$size]};
    border: 1px solid ${({ theme }) => theme.colors.border.normal};
    cursor: pointer;
    position: relative;

    ${({ $position, $size, theme }) =>
        $position === "start"
        ? `
            border-top-left-radius: ${theme.borderRadius[$size]};
        `
        : $position === "end"
        ? `
            border-top-right-radius: ${theme.borderRadius[$size]};
        `
        : `
            border-radius: 0;
        `}

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.hover};
        color: ${({ theme }) => theme.colors.textSecondary};
    }
`;

// Table components
export const HeaderText = styled.div<{ $size: sizes }>
`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SortSpan = styled.span<{ $size: sizes }>
`
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.textPrimary};
    pointer-events: none; 
`;

export const TableRow = styled.tr<{ $style: 'normal' | 'striped'}>`
    background-color: ${({ theme }) => theme.colors.background.normal};

    ${({ $style, theme }) => $style === 'striped' && `
        &:nth-child(even) {
            background-color: ${theme.colors.background.disabled};
        }
    `}

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.hover};
        color: ${({ theme }) => theme.colors.textSecondary};
    }
    
`;

export const TableData = styled.td<{ $size: sizes; $last:boolean; $position: 'start' | 'end' | null }>`
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    text-align: left;

    padding: ${({ theme, $size }) => theme.spacing[$size]};

    border: 1px solid ${({ theme }) => theme.colors.border.normal};
    border-top: none;

    ${({ $last, $position, $size, theme }) => $last && (
        $position === 'start'
        ? `
            border-bottom-left-radius: ${theme.borderRadius[$size]};
        `
        : $position === 'end'
        ? `
            border-bottom-right-radius: ${theme.borderRadius[$size]};
        `
        : `
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        `
    )}
`

export const BentoWrapper = styled.div<{ $size: sizes; theme: Theme }>`
    display: grid;
    gap: ${({ theme, $size }) => theme.spacing[$size]};
    width: 100%;
    overflow: hidden;

    grid-template-columns: repeat(12, 1fr); 
    grid-auto-rows: auto;
`;

export const BentoSection = styled.div<{ $size: sizes; $ratio: number }>`
    grid-column: span ${({ $ratio }) => Math.ceil($ratio * 12)};
    background-color: ${({ theme }) => theme.colors.background.normal};
    border: 1px solid ${({ theme }) => theme.colors.border.normal};
    border-radius: ${({ theme, $size }) => theme.borderRadius[$size]};
    padding: ${({ theme, $size }) => theme.spacing[$size]};
`;