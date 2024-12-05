import React from 'react';

import {
    BlockWrapper,
    RadioWrapper,
    RadioLabel,
    HiddenRadio,
    Radio,
} from './styles';
import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

export interface RadioGroupProps {
    name: string;
    options: RadioOptions[];
    selected: number;
    onChange: (i: number) => any;
    label?: string;
    disabled?: boolean;
    direction?: 'row' | 'column';
    defaultValue?: number;
    size?: sizes;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    name,
    selected,
    options,
    onChange,
    label,
    disabled = false,
    direction = 'row',
    size = 'small',
}) => {
    const { theme } = useTheme();
    const validSelectedIndex = React.useMemo(
        () =>
            options.findIndex(
                (option, index) => index === selected && !option.disabled,
            ),
        [options, selected],
    );
    const finalSelectedIndex = React.useMemo(
        () =>
            validSelectedIndex !== -1
                ? validSelectedIndex
                : options.findIndex((option) => !option.disabled),
        [options, validSelectedIndex],
    );

    return (
        <BlockWrapper>
            {label && (
                <Label htmlFor={name} theme={theme} $size={size}>
                    {label}
                </Label>
            )}
            <RadioWrapper
                $size={size}
                $direction={direction}
                theme={theme}
                role="radiogroup"
                aria-labelledby={name}
            >
                {options.map((option, index) => (
                    <RadioLabel
                        key={index}
                        $size="medium"
                        $direction={direction}
                        $selected={finalSelectedIndex === index}
                        $disabled={option?.disabled || disabled}
                        theme={theme}
                    >
                        <HiddenRadio
                            type="radio"
                            name={name}
                            value={index}
                            checked={finalSelectedIndex === index}
                            onChange={() => onChange(index)}
                            disabled={option?.disabled || disabled}
                            aria-label={option.label}
                        />
                        <Radio
                            $selected={finalSelectedIndex === index}
                            $size={size}
                            $disabled={option?.disabled || disabled}
                            theme={theme}
                            tabIndex={finalSelectedIndex === index ? 0 : -1}
                        >
                            {finalSelectedIndex === index && (
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        backgroundColor:
                                            theme.colors.textPrimary,
                                    }}
                                />
                            )}
                        </Radio>
                        {option.label}
                    </RadioLabel>
                ))}
            </RadioWrapper>
        </BlockWrapper>
    );
};
