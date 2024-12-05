import React from 'react';

import {
    CheckboxLabel,
    FlexItemsCenterWrapper,
    Required,
    HiddenCheckbox,
    CheckmarkIcon,
    StyledCheckbox,
} from './styles';
import { useTheme } from '../../themeContext';

export interface CheckboxProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    size?: sizes;
    required?: boolean | string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    value,
    onChange,
    label,
    size = 'small',
    disabled = false,
    checked = false,
    required = false,
}: CheckboxProps) => {
    const { theme } = useTheme();

    return (
        <FlexItemsCenterWrapper>
            <HiddenCheckbox
                id={`checkbox-${value}`}
                checked={checked}
                onChange={onChange}
                value={value}
                disabled={disabled}
                aria-checked={checked}
                aria-disabled={disabled}
            />
            <StyledCheckbox
                $checked={checked}
                $disabled={disabled}
                $size={size}
                theme={theme}
            >
                <CheckmarkIcon $checked={checked} theme={theme} />
            </StyledCheckbox>
            {label && (
                <>
                    <CheckboxLabel
                        htmlFor={`checkbox-${value}`}
                        $size={size}
                        $disabled={!!disabled}
                        theme={theme}
                    >
                        {label}
                    </CheckboxLabel>
                    {required && <Required theme={theme}>*</Required>}
                </>
            )}
        </FlexItemsCenterWrapper>
    );
};
