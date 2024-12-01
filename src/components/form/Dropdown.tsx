import React from 'react';
import styled from 'styled-components';

import { Button } from '../buttons/Button';
import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

const OptionsContainer = styled.div<{ $size: sizes }>`
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-top: 2px;

    max-height: ${({ theme, $size }) =>
        theme.components.dropdowns.custom.height[$size]};
    overflow: auto;

    background-color: ${({ theme }) => theme.components.dropdowns.background};

    border: 2px solid ${({ theme }) => theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.dropdowns.radius[$size]};

    padding: ${({ theme }) => theme.components.dropdowns.padding};

    :first-child {
        border-top: none;
    }
`;

const Option = styled.button<{ $size: sizes }>`
    background-color: ${({ theme }) => theme.colors.background.normal};
    color: ${({ theme }) => theme.colors.textSecondary};

    border: none;
    border-top: 2px solid ${({ theme }) => theme.colors.border.normal};

    padding: ${({ theme, $size }) => theme.components.dropdowns.padding[$size]};

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.hover};
        color: ${({ theme }) => theme.colors.textPrimary};
    }
`;

/**
 * SingleDropdown component for selecting a single option from a list.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name attribute for the dropdown.
 * @param {Array<string>} props.options - An array of options to select from.
 * @param {function} props.onChange - Function to handle value changes.
 * @param {string} [props.placeholder] - Placeholder text when no option is selected.
 * @param {string} [props.NoOptionsMessage] - Message to display when no options are available.
 * @param {number|null} [props.defaultValue=null] - The index of the default selected option.
 * @param {string} [props.label] - Label text for the dropdown.
 * @param {string} [props.ariaLabel] - Aria label for accessibility.
 * @param {boolean} [props.disabled=false] - Whether the dropdown is disabled.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the dropdown.
 * @returns {JSX.Element} A single dropdown component with options.
 *
 * @example
 * const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
 *
 * <SingleDropdown
 *   name="fruits"
 *   options={['Apple', 'Banana', 'Cherry']}
 *   label="Select a Fruit"
 *   value={selectedOption}
 *   onChange={(option) => setSelectedOption(option)}
 * />
 */
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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {label && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Label $size={size} theme={theme} htmlFor={name}>
                        {label}
                    </Label>
                    {required && (
                        <span
                            style={{ color: theme.colors.error, marginLeft: 4 }}
                        >
                            *
                        </span>
                    )}
                </div>
            )}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                    maxWidth: '100%',
                }}
            >
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
                    <OptionsContainer $size={size} theme={theme}>
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
                    </OptionsContainer>
                )}
            </div>
        </div>
    );
};
