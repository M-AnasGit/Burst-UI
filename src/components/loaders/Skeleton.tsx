import React from 'react';
import styled, { keyframes } from 'styled-components';

import models from './models';

import { useTheme } from '../../themeContext';

interface SkeletonItemProps {
    item: CustomModel;
    index: number;
    size: sizes;
    color?: string;
    speed?: speed;
}

const SkeletonItem: React.FC<SkeletonItemProps> = ({
    item,
    index,
    size = 'small',
    speed = 'normal',
    color,
}: SkeletonItemProps) => {
    const { theme } = useTheme();

    switch (item.type) {
        case 'text':
            return (
                <div
                    style={{
                        display: 'flex',
                        width: item.width,
                        flexDirection: 'column',
                        gap: item.spacing || '0.5rem',
                    }}
                >
                    {Array.from({ length: item.lines }).map((_, i) => (
                        <SkeletonBar
                            key={i}
                            $width={`${100 - Math.random() * 20 * i}%`}
                            $height={item.height}
                            $color={color}
                            $speed={speed}
                            theme={theme}
                        />
                    ))}
                </div>
            );
        case 'block':
            return (
                <SkeletonBar
                    key={index}
                    $width={item.width}
                    $height={item.height}
                    $color={color}
                    $speed={speed}
                    theme={theme}
                />
            );
        case 'circle':
            return (
                <SkeletonCircle
                    key={index}
                    $width={item.width}
                    $height={item.height}
                    $color={color}
                    $speed={speed}
                    theme={theme}
                />
            );
        case 'flex-container':
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: item.direction || 'row',
                        justifyContent: item.justify,
                        alignItems: item.align,
                        gap: theme.components.skeletons.padding
                            ? theme.components.skeletons.padding[size]
                            : '0.5rem',
                        flexWrap: 'wrap',

                        width: item.width,
                        height: item.height,
                    }}
                >
                    {item.items.map((subItem, subIndex) => (
                        <SkeletonItem
                            key={subIndex}
                            item={subItem}
                            index={subIndex}
                            size={size}
                            color={color}
                            speed={speed}
                        />
                    ))}
                </div>
            );
        default:
            return (
                <SkeletonBar
                    key={index}
                    $width={'100%'}
                    $height={'20px'}
                    theme={theme}
                />
            );
    }
};

const pulse = keyframes`
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`;

// prettier-ignore
const SkeletonSetting = styled.div<{
    $width: string;
    $height: string;
    $color?: string;
    $speed?: speed;
}>
`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};

    background-color: ${({ theme, $color }) =>
        $color ? $color : theme.colors.background.active};

    animation: ${pulse}
        ${({ theme, $speed }) =>
            $speed ? theme.components.skeletons.custom.speed[$speed] : "1s"}
        infinite;
`;

const SkeletonBar = styled(SkeletonSetting)`
    border-radius: ${({ theme }) => theme.borderRadius.large};
`;

const SkeletonCircle = styled(SkeletonSetting)`
    border-radius: 50%;
`;

/**
 * Skeleton component for displaying loading placeholders.
 *
 * @param {Object} props - The component props.
 * @param {models | CustomModel[]} [props.model='article'] - Predefined model or custom configuration for skeleton layout.
 * @param {sizes} [props.size='small'] - Size of the skeleton components.
 * @param {speed} [props.speed='normal'] - Animation speed of the skeleton.
 * @param {string} [props.color] - Custom color for the skeleton components.
 * @returns {JSX.Element} A skeleton loading placeholder component.
 *
 * @example
 * <Skeleton model="profile" size="medium" speed="fast" color="#e0e0e0" />
 */
export const Skeleton: React.FC<SkeletonProps> = ({
    model = 'article',
    size = 'small',
    speed = 'normal',
    color,
}: SkeletonProps) => {
    const { theme } = useTheme();
    const chosenModel = React.useMemo(() => {
        if (typeof model === 'string') {
            return models[model];
        }

        return model;
    }, [model]);

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                gap: theme.components.skeletons.padding
                    ? theme.components.skeletons.padding[size]
                    : '0.5rem',
            }}
        >
            {chosenModel.map((item, index) => (
                <SkeletonItem
                    key={index}
                    item={item}
                    index={index}
                    size={size}
                    color={color}
                    speed={speed}
                />
            ))}
        </div>
    );
};
