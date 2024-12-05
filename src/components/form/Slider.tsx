import React from 'react';

import { Input } from './Input';
import {
    FlexColumnWrapper,
    SliderWrapper,
    SliderLabel,
    RangeLabel,
    SliderContainer,
    SliderProgress,
    SliderThumb,
} from './styles';
import { useTheme } from '../../themeContext';

export interface SliderProps {
    name: string;
    value: number;
    min: number;
    max: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    label?: string;
    ariaLabel?: string;
    readOnly?: boolean;
    disabled?: boolean;
    size?: sizes;
}

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
    const [strVal, setStrVal] = React.useState<string>(`${value}`);
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

            setStrVal(`${newValue}`);
            onChange({ target: { name, value: newValue } } as any);
        },
        [onChange],
    );

    return (
        <FlexColumnWrapper>
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
            <SliderWrapper $size={size} theme={theme}>
                <RangeLabel $size={size} $disabled={disabled} theme={theme}>
                    {min}
                </RangeLabel>
                <Input
                    name={name}
                    placeholder={`${min}`}
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
            </SliderWrapper>
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
        </FlexColumnWrapper>
    );
};
