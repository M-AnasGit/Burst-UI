import React from 'react';

import { StyledSpinner, SpinnerLabel, SpinnerWrapper } from './styles';
import { useTheme } from '../../themeContext';

export interface SpinnerProps {
    size?: sizes;
    label?: string;
    isLabel?: boolean;
    speed?: speed;
    color?: string;
    fillColor?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
    size = 'small',
    label = 'Loading...',
    isLabel = true,
    speed = 'normal',
    fillColor,
    color,
}: SpinnerProps) => {
    const { theme } = useTheme();
    return (
        <SpinnerWrapper>
            <StyledSpinner
                $size={size}
                $color={color || ''}
                $fillColor={fillColor || ''}
                $speed={speed}
                theme={theme}
                aria-label={label}
            />
            {isLabel && (
                <SpinnerLabel $size={size} theme={theme}>
                    {label}
                </SpinnerLabel>
            )}
        </SpinnerWrapper>
    );
};
