import React from 'react';
import styled, { keyframes } from 'styled-components';

import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const SpinnerLabel = styled(Label)`
    margin-bottom: 0;
    margin-top: ${({ theme, $size }) =>
        theme.components.spinners.padding[$size]};
`;

// prettier-ignore
const SpinnerComp = styled.div<{
    $size: sizes;
    $color: string;
    $speed: speed;
    $fillColor: string;
}>
`
    border: ${({ theme, $size }) =>
            theme.components.spinners.custom.borderWidth[$size]}
        solid ${({ theme, $fillColor }) => $fillColor || theme.colors.border.normal};

    border-top: ${({ theme, $size }) =>
            theme.components.spinners.custom.borderWidth[$size]}
        solid ${({ theme, $color }) => $color || theme.colors.textPrimary};
    border-radius: 50%;
    width: ${({ theme, $size }) => theme.components.spinners.sizes[$size]};
    height: ${({ theme, $size }) => theme.components.spinners.sizes[$size]};
    animation: ${spin}
        ${({ theme, $speed }) => theme.components.spinners.custom.speed[$speed]}
        linear infinite;
`;

/**
 * Spinner component for indicating loading state.
 *
 * @param {Object} props - The component props.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the spinner.
 * @param {string} [props.label='Loading...'] - Label text for the spinner.
 * @param {boolean} [props.isLabel=true] - Whether to display the label.
 * @param {('slow'|'normal'|'fast')} [props.speed='normal'] - Speed of the spinner animation.
 * @param {string} [props.color] - Color of the spinner's rotating part.
 * @param {string} [props.fillColor] - Color of the spinner's non-rotating part.
 * @returns {JSX.Element} A spinner component with optional label.
 *
 * @example
 * <Spinner size="medium" label="Please wait..." speed="fast" color="#007bff" />
 */
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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <SpinnerComp
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
        </div>
    );
};
