import React from 'react';

import {
    HiddenCheckbox,
    ToggleWrapper,
    ToggleLabel,
    ToggleSwitch,
    ToggleSlider,
} from './styles';
import { useTheme } from '../../themeContext';

export interface ToggleProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    label?: string;
    inline?: boolean;
    checked?: boolean;
    disabled?: boolean;
    size?: sizes;
}

export const Toggle: React.FC<ToggleProps> = ({
    onChange,
    label,
    inline = true,
    checked = false,
    disabled = false,
    size = 'small',
}: ToggleProps) => {
    const checkedRef = React.useRef<HTMLInputElement>(null);
    const { theme } = useTheme();

    const handleToggle = React.useCallback((): void => {
        if (checkedRef.current && !disabled) {
            checkedRef.current.click();
        }
    }, [checkedRef, disabled]);
    return (
        <ToggleWrapper $inline={inline} theme={theme}>
            <HiddenCheckbox
                ref={checkedRef}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
            />
            {label && (
                <ToggleLabel
                    $size={size}
                    $disabled={disabled}
                    $inline={inline}
                    theme={theme}
                    htmlFor={label}
                >
                    {label}
                </ToggleLabel>
            )}
            <ToggleSwitch
                $size={size}
                $checked={checked}
                $disabled={disabled}
                onClick={handleToggle}
                theme={theme}
            >
                <ToggleSlider
                    $size={size}
                    $checked={checked}
                    $disabled={disabled}
                    theme={theme}
                />
            </ToggleSwitch>
        </ToggleWrapper>
    );
};
