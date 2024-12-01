import React from 'react';
import styled from 'styled-components';

import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

// prettier-ignore
const ToggleLabel = styled(Label)<{
    $size: sizes;
    $disabled: boolean;
    $inline: boolean;
}>
`
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};

    ${({ theme, $inline, $size }) =>
        $inline
            ? `margin-right: ${theme.spacing[$size]};
                margin-bottom: 0;
            `
            : `margin-bottom: ${theme.components.toggles.padding[$size]};`}
    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

// prettier-ignore
const ToggleSwitch = styled.button<{
    $size: sizes;
    $checked: boolean;
    $disabled: boolean;
}>
`        
    display: flex;
    justify-content: ${({ $checked }) => ($checked ? 'flex-end' : 'flex-start')};
    width: ${({ theme, $size }) => theme.components.toggles.sizes[$size]};

    background-color: ${({ theme, $checked, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : $checked
              ? theme.colors.background.active
              : theme.colors.background.normal};

    padding: ${({ theme, $size }) => theme.components.toggles.padding[$size]};
    border: 1px solid
        ${({ theme, $disabled }) =>
            $disabled
                ? theme.colors.border.disabled
                : theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.toggles.radius[$size]};

    cursor: pointer;

    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;

// prettier-ignore
const ToggleSlider = styled.div<{
    $size: sizes;
    $checked: boolean;
    $disabled: boolean;
}>
`
    width: ${({ theme, $size }) =>
        theme.components.toggles.custom.slider[$size]};
    height: ${({ theme, $size }) =>
        theme.components.toggles.custom.slider[$size]};

    background-color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};

    border-radius: ${({ theme, $size }) =>
        theme.components.toggles.radius[$size]};

    transition: ${({ theme }) => theme.transitions.slow};
`;

/**
 * Toggle component for boolean input.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onChange - Function to handle toggle state changes.
 * @param {string} [props.label] - Label text for the toggle.
 * @param {boolean} [props.inline=true] - Whether to display the label inline with the toggle.
 * @param {boolean} [props.checked=false] - Whether the toggle is checked.
 * @param {boolean} [props.required=false] - Whether the toggle is required.
 * @param {boolean} [props.disabled=false] - Whether the toggle is disabled.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the toggle.
 * @returns {JSX.Element} A toggle switch element with optional label.
 *
 * @example
 * const [darkMode, setDarkMode] = React.useState<boolean>(false);
 *
 * <Toggle
 *   onChange={(e) => setDarkMode(e.target.checked)}
 *   label="Dark Mode"
 *   checked={darkMode}
 *   size="medium"
 * />
 */
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
        <div
            style={{
                display: 'flex',
                flexDirection: inline ? 'row' : 'column',
                alignItems: inline ? 'center' : 'flex-start',
            }}
        >
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
        </div>
    );
};
