import React from 'react';

import { Button } from '../buttons/Button';
import {
    DropdownWrapper,
    OptionsWrapper,
    Option,
    Required,
    FlexColumnWrapper,
    FlexRowWrapper,
} from './styles';
import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

export interface DropdownProps {
    name: string;
    options: string[];
    value: string | null;
    onChange: (selected: string) => any;
    placeholder?: string;
    NoOptionsMessage?: string;
    defaultValue?: number | null;
    label?: string;
    ariaLabel?: string;
    disabled?: boolean;
    required?: boolean;
    size?: sizes;
}

export const Dropdown: React.FC<DropdownProps> = ({
    name,
    placeholder = 'Select an option',
    defaultValue = null,
    options,
    label,
    ariaLabel,
    value,
    onChange,
    size = 'small',
    disabled = false,
    required = false,
}: DropdownProps) => {
    const { theme } = useTheme();
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = React.useCallback((): void => {
        setOpen((prev) => !prev);
    }, [onChange]);

    return (
        <FlexColumnWrapper>
            {label && (
                <FlexRowWrapper>
                    <Label $size={size} theme={theme} htmlFor={name}>
                        {label}
                    </Label>
                    {required && <Required>*</Required>}
                </FlexRowWrapper>
            )}
            <DropdownWrapper>
                <Button
                    onClick={handleOpen}
                    size={size}
                    disabled={disabled}
                    ariaLabel={ariaLabel}
                >
                    {defaultValue
                        ? options[defaultValue]
                        : value || placeholder}
                </Button>
                {open && (
                    <OptionsWrapper $size={size} theme={theme}>
                        {options.map((option, index) => (
                            <Option
                                $size={size}
                                theme={theme}
                                key={index}
                                onClick={() => {
                                    onChange(option);
                                    setOpen(false);
                                }}
                            >
                                {option}
                            </Option>
                        ))}
                    </OptionsWrapper>
                )}
            </DropdownWrapper>
        </FlexColumnWrapper>
    );
};
