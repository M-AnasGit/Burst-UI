import React from 'react';
import styled from 'styled-components';

import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

const StyledLabel = styled(Label)<{ $size: string; $disabled: boolean }>`
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    margin-left: 0.5rem;
    margin-bottom: 0;

    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;

// prettier-ignore
const StyledCheckbox = styled.div<{
    $checked: boolean;
    $disabled: boolean;
    $size: sizes;
}>
`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ theme, $size }) => theme.components.checkboxes.sizes[$size]};
    height: ${({ theme, $size }) => theme.components.checkboxes.sizes[$size]};

    background-color: ${({ theme, $checked, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : $checked
              ? theme.colors.textPrimary
              : theme.colors.background.normal};
    border: 2px solid
        ${({ theme, $checked, $disabled }) =>
            $disabled
                ? theme.colors.border.disabled
                : $checked
                  ? theme.colors.textPrimary
                  : theme.colors.border.normal};
    border-radius: 0.25rem;

    transition: all 0.2s ease-in-out;
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const CheckmarkIcon = styled.div<{ $checked: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    opacity: ${({ $checked }) => ($checked ? 1 : 0)};

    transition: opacity 0.2s ease-in-out;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    z-index: 1;

    opacity: 0;
    cursor: pointer;
`;

/**
 * Checkbox component for boolean input.
 *
 * @param {Object} props - The component props.
 * @param {string} props.value - The value attribute of the checkbox.
 * @param {function} props.onChange - Function to handle checkbox state changes.
 * @param {string} [props.label] - Label text for the checkbox.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the checkbox.
 * @param {boolean} [props.disabled=false] - Whether the checkbox is disabled.
 * @param {boolean} [props.checked=false] - Whether the checkbox is checked.
 * @param {boolean} [props.required=false] - Whether the checkbox is required.
 * @returns {JSX.Element} A checkbox element with optional label.
 *
 * @example
 * <Checkbox
 *    value="terms"
 *    onChange={(e) => setAcceptedTerms(e.target.checked)}
 *    label="I accept the terms and conditions"
 *    size="medium"
 *    checked={acceptedTerms}
 *    required={true}
 * />
 */
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
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <HiddenCheckbox
                checked={checked}
                onChange={onChange}
                value={value}
                disabled={disabled}
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
                    <StyledLabel
                        $size={size}
                        theme={theme}
                        $disabled={!!disabled}
                    >
                        {label}
                    </StyledLabel>
                    {required && (
                        <span
                            style={{ color: theme.colors.error, marginLeft: 4 }}
                        >
                            *
                        </span>
                    )}
                </>
            )}
        </div>
    );
};
