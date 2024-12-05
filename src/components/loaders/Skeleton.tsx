import React from 'react';

import models from './models';

import { useTheme } from '../../themeContext';
import {
    SkeletonItemWrapper,
    SkeletonBar,
    SkeletonCircle,
    SkeletonFlexWrapper,
    SkeletonWrapper,
} from './styles';

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
                <SkeletonItemWrapper
                    $width={item.width}
                    $spacing={item.spacing || '0.5rem'}
                    theme={theme}
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
                </SkeletonItemWrapper>
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
                <SkeletonFlexWrapper
                    key={index}
                    $size={size}
                    $direction={item.direction}
                    $justify={item.justify}
                    $align={item.align}
                    $width={item.width}
                    $height={item.height}
                    theme={theme}
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
                </SkeletonFlexWrapper>
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

export interface SkeletonProps {
    model?: models | CustomModel[];
    color?: string;
    speed: speed;
    size?: sizes;
}

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
        <SkeletonWrapper $size={size} theme={theme}>
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
        </SkeletonWrapper>
    );
};
