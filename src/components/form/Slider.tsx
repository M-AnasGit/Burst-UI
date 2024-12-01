import React from 'react';
import styled from 'styled-components';

import Label from '../utils/Label';

import { Input } from './InputField';

import { useTheme } from '../../themeContext';

const SliderLabel = styled(Label)<{ $disabled: boolean }>`
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.disabled : theme.colors.text};
`;

const RangeLabel = styled.span<{ $size: sizes; $disabled: boolean }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textSecondary};
`;

const SliderContainer = styled.div<{ $disabled: boolean; $size: sizes }>`
    position: relative;
    height: ${({ theme, $size }) => theme.components.sliders.sizes[$size]};
    width: 100%;

    background-color: ${({ theme, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : theme.colors.background.normal};

    border: 1px solid
        ${({ theme, $disabled }) =>
            $disabled
                ? theme.colors.border.disabled
                : theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.sliders.radius[$size]};

    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

// prettier-ignore
const SliderThumb = styled.div<{
    $disabled: boolean;
    $size: sizes;
    value: number;
    min: number;
    max: number;
}>
`
    position: absolute;
    top: ${({ theme, $size }) =>
        `${theme.components.sliders.custom.thumb.positions.top[$size]}`};
    left: ${({ value, min, max }) => `${((value - min) / (max - min)) * 100 - 0.5}%`};

    width: ${({ theme, $size }) =>
        theme.components.sliders.custom.thumb.sizes[$size]};
    height: ${({ theme, $size }) =>
        theme.components.sliders.custom.thumb.sizes[$size]};

    background-color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    border-radius: 50%;

    transition: left ${({ theme }) => theme.transitions.xslow};
`;

// prettier-ignore
const SliderProgress = styled.div<{
    $disabled: boolean;
    $size: sizes;
    value: number;
    min: number;
    max: number;
}>
`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: ${({ value, min, max }) =>
        `${((value - min) / (max - min)) * 100}%`};

    background-color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    border-radius: ${({ theme, $size }) =>
        theme.components.sliders.radius[$size]};
`;

/**
 * Slider component for selecting a value within a range.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name attribute for the slider.
 * @param {number} props.value - The current value of the slider.
 * @param {number} [props.min=0] - The minimum value of the slider.
 * @param {number} [props.max=100] - The maximum value of the slider.
 * @param {function} props.onChange - Function to handle value changes.
 * @param {string} [props.label] - Label text for the slider.
 * @param {string} [props.ariaLabel] - Aria label for accessibility.
 * @param {boolean} [props.readOnly=false] - Whether the slider is read-only.
 * @param {boolean} [props.disabled=false] - Whether the slider is disabled.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the slider.
 * @returns {JSX.Element} A slider component with optional label and input field.
 *
 * @example
 * const [value, setValue] = React.useState<number>(500);
 *
 * <Slider
 *   name="volume"
 *   value={value}
 *   min={0}
 *   max={1000}
 *   onChange={(e) => setValue(Number(e.target.value))}
 *   label="Volume"
 *   ariaLabel="Volume control"
 * />
 */
export const Slider: React.FC<SliderProps> = ({
    name,
    value,
    min = 0,
    max = 100,
    onChange,
    label,
    ariaLabel,
    readOnly = false,
    disabled = false,
    size = 'small',
}: SliderProps) => {
    const { theme } = useTheme();
    const [strVal, setStrVal] = React.useState<string>(value.toString());
    const handleLocalChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setStrVal(e.target.value);
            onChange(e);
        },
        [onChange],
    );

    const handleSliderClick = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (disabled) return;

            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const newValue = Math.round(
                (offsetX / rect.width) * (max - min) + min,
            );

            setStrVal(newValue.toString());
            onChange({ target: { name, value: newValue } } as any);
        },
        [onChange],
    );

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {label && (
                <SliderLabel
                    htmlFor={name}
                    $size={size}
                    $disabled={disabled}
                    theme={theme}
                >
                    {label}
                </SliderLabel>
            )}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                    gap: theme.spacing[`${size}`],
                }}
            >
                <RangeLabel $size={size} $disabled={disabled} theme={theme}>
                    {min}
                </RangeLabel>
                <Input
                    name={name}
                    placeholder={value.toString()}
                    value={strVal}
                    onChange={handleLocalChange}
                    options={{
                        readOnly: readOnly,
                        disabled: disabled,
                        type: 'number',
                    }}
                    size={size}
                    ariaLabel={ariaLabel}
                />
                <RangeLabel $size={size} $disabled={disabled} theme={theme}>
                    {max}
                </RangeLabel>
            </div>
            <SliderContainer
                $disabled={disabled}
                $size={size}
                theme={theme}
                onClick={handleSliderClick}
            >
                <SliderProgress
                    $disabled={disabled}
                    $size={size}
                    value={parseInt(strVal)}
                    min={min}
                    max={max}
                    theme={theme}
                />
                <SliderThumb
                    $disabled={disabled}
                    $size={size}
                    theme={theme}
                    value={parseInt(strVal)}
                    min={min}
                    max={max}
                />
            </SliderContainer>
        </div>
    );
};
