import React from 'react';
import styled from 'styled-components';

import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

// prettier-ignore
const RadioLabel = styled(Label)<{
    $direction: 'row' | 'column';
    $selected: boolean;
    $disabled: boolean;
}>
`
    display: flex;
    align-items: center;

    color: ${({ theme, $selected, $disabled }) =>
        $selected
            ? theme.colors.textPrimary
            : $disabled
              ? theme.colors.textDisabled
              : theme.colors.textSecondary};

    margin-bottom: ${({ $direction }) => ($direction === 'column' ? '8px' : 0)};
    margin-right: ${({ $direction }) => ($direction === 'row' ? '16px' : 0)};
    &:last-child {
        margin-right: 0;
    }

    cursor: pointer;

    ${({ $disabled }) => $disabled && `cursor: not-allowed;`}
`;

const HiddenRadio = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

// prettier-ignore
const Radio = styled.div<{
    $selected: boolean;
    $size: sizes;
    $disabled: boolean;
}>
`
    width: ${({ theme, $size }) => theme.components.radios.sizes[$size]};
    height: ${({ theme, $size }) => theme.components.radios.sizes[$size]};

    padding: ${({ theme, $size }) => theme.components.radios.padding[$size]};
    margin-right: 8px;

    border-radius: 50%;
    border: 2px solid
        ${({ theme, $selected, $disabled }) =>
            $selected
                ? theme.colors.textPrimary
                : $disabled ? theme.colors.textDisabled : theme.colors.textSecondary};

    &:disabled {
        cursor: not-allowed;
    }
`;

/**
 * RadioGroup component for selecting one option from a list.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name attribute for the radio group.
 * @param {number} props.selected - The index of the currently selected option.
 * @param {Array<RadioOptions>} props.options - An array of radio options.
 * @param {(index: number) => void} props.onChange - Function to handle selection changes.
 * @param {string} [props.label] - Label for the entire radio group.
 * @param {boolean} [props.disabled=false] - Whether the entire radio group is disabled.
 * @param {('row'|'column')} [props.direction='row'] - Layout direction of the radio options.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the radio buttons.
 * @returns {JSX.Element} A radio group with options.
 *
 * @example
 * <RadioGroup
 *    name="favoriteColor"
 *    selected={selectedColor}
 *    options={[
 *      { label: 'Red' },
 *      { label: 'Blue' },
 *      { label: 'Green', disabled: true },
 *    ]}
 *    onChange={(index) => setSelectedColor(index)}
 *    label="Choose your favorite color"
 *    direction="column"
 *    size="medium"
 * />
 */
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
        <div
            style={{
                display: 'block',
            }}
        >
            {label && (
                <Label htmlFor={name} theme={theme} $size={size}>
                    {label}
                </Label>
            )}
            <div
                style={{
                    display: 'flex',
                    flexDirection: direction === 'column' ? 'column' : 'row',
                    alignItems:
                        direction === 'column' ? 'flex-start' : 'center',
                    marginTop: theme.spacing[size],
                }}
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
                        />
                        <Radio
                            $selected={finalSelectedIndex === index}
                            $size={size}
                            $disabled={option?.disabled || disabled}
                            theme={theme}
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
            </div>
        </div>
    );
};
