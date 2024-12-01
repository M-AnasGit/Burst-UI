import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../themeContext';

import Label from '../utils/Label';

import closed from '../../assets/l-eye-closed.svg';
import open from '../../assets/l-eye.svg';

const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

// prettier-ignore
const InputWrapper = styled(LabelWrapper)<{
    $hasError: boolean;
    $size: string;
    $disabled: boolean;
}>
`
    flex-direction: row;
    align-items: center;

    background-color: ${({ theme, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : theme.colors.background.normal};
    border: 1px solid
        ${({ theme, $hasError }) =>
            $hasError ? theme.colors.error : theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.inputs.radius[$size]};

    padding: ${({ theme, $size }) => theme.components.inputs.padding[$size]};
    margin-bottom: 0;
`;

const IconWrapper = styled.span<{ $size: sizes }>`
    display: flex;
    align-items: center;
    padding-left: ${({ theme, $size }) =>
        theme.components.inputs.padding[$size]};
`;

// prettier-ignore
const StyledInput = styled.input<{
    $hasError: boolean;
    $size: sizes;
    $disabled: boolean;
}>
`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};

    background-color: transparent;
    color: ${({ theme, $disabled }) =>$disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    border: none;
    outline: none;

    width: 100%;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.background.disabled};
        cursor: not-allowed;
    }
`;

// prettier-ignore
const StyledTextArea = styled.textarea<{
    $hasError: boolean;
    $size: sizes;
    $disabled: boolean;
}>
`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};

    background-color: transparent;
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    border: none;
    outline: none;

    width: 100%;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.background.disabled};
        cursor: not-allowed;
    }
`;

const Error = styled.p`
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.typography.fontSize.xsmall};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    margin-top: 0.25rem;
`;

/**
 * Input component for text input fields.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name attribute of the input.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.value - The current value of the input.
 * @param {function} props.onChange - Function to handle input changes.
 * @param {Object} [props.options] - Additional options for the input.
 * @param {boolean} [props.options.disabled] - Whether the input is disabled.
 * @param {boolean} [props.options.readOnly] - Whether the input is read-only.
 * @param {boolean|string} [props.options.required] - Whether the input is required and optional error message.
 * @param {number|Object} [props.options.maxLength] - Maximum length of input and optional error message.
 * @param {number|Object} [props.options.minLength] - Minimum length of input and optional error message.
 * @param {boolean} [props.options.displayError=true] - Whether to display error messages.
 * @param {boolean} [props.options.password] - Whether the input is a password field.
 * @param {string|Object} [props.options.match] - Value to match against and optional error message.
 * @param {RegExp|Object} [props.options.pattern] - Regex pattern to validate against and optional error message.
 * @param {string} [props.ariaLabel] - Aria label for accessibility.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the input.
 * @param {string} [props.label] - Label for the input field.
 * @returns {JSX.Element} An input element with optional label and error message.
 *
 * @example
 * <Input
 *    name="username"
 *    placeholder="Enter your username"
 *    value={username}
 *    onChange={(e) => setUsername(e.target.value)}
 *    options={{
 *      required: 'Username is required',
 *      maxLength: { value: 20, message: 'Username is too long' },
 *      pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'Invalid username' },
 *    }}
 *    ariaLabel="Username"
 *    size="small"
 *    label="Username"
 * />
 */
export const Input: React.FC<InputProps> = ({
    name,
    placeholder,
    value,
    onChange,
    options,
    ariaLabel,
    size = 'small',
    label,
}: InputProps) => {
    const { theme } = useTheme();
    const [error, setError] = React.useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] =
        React.useState<boolean>(false);

    const {
        required,
        disabled,
        readOnly,
        password,
        pattern,
        maxLength,
        minLength,
        match,
        type = 'text',
        displayError = true,
    } = options || {};
    const [inputType, setInputType] = React.useState<string>(
        password ? 'password' : 'text',
    );

    useEffect(() => {
        setInputType(password && !passwordVisible ? 'password' : type);
    }, [passwordVisible]);

    const validateField = React.useCallback(() => {
        if (required && !value) {
            setError(
                typeof required === 'string'
                    ? required
                    : 'This field is required',
            );
            return;
        }

        if (pattern && value) {
            let regex;
            let message;
            if (
                typeof pattern === 'object' &&
                'value' in pattern &&
                'message' in pattern
            ) {
                regex = pattern?.value || new RegExp('');
                message = pattern?.message || 'Invalid input';
            }
            regex = pattern as RegExp;
            message = 'Invalid input';
            if (!regex.test(value)) {
                setError(
                    typeof pattern === 'object' ? message : 'Invalid input',
                );
                return;
            }
        }

        if (
            maxLength &&
            value.length >
                (typeof maxLength === 'object' ? maxLength.value : maxLength)
        ) {
            setError(
                typeof maxLength === 'object'
                    ? maxLength.message
                    : 'Input too long',
            );
            return;
        }

        if (
            minLength &&
            value.length <
                (typeof minLength === 'object' ? minLength.value : minLength)
        ) {
            setError(
                typeof minLength === 'object'
                    ? minLength.message
                    : 'Input too short',
            );
            return;
        }

        if (
            match &&
            value !== (typeof match === 'object' ? match.value : match)
        ) {
            setError(
                typeof match === 'object'
                    ? match.message
                    : 'Input does not match',
            );
            return;
        }

        setError(null);
    }, [value, required, pattern, maxLength, minLength, match]);

    return (
        <LabelWrapper>
            {label && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Label htmlFor={name} theme={theme} $size={size}>
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
            <InputWrapper
                $hasError={!!error}
                $size={size}
                $disabled={!!disabled}
                theme={theme}
            >
                <StyledInput
                    $hasError={!!error}
                    $size={size}
                    $disabled={!!disabled}
                    theme={theme}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={validateField}
                    placeholder={placeholder}
                    type={inputType}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required ? true : false}
                    aria-label={ariaLabel}
                />
                {password && (
                    <IconWrapper
                        $size={size}
                        theme={theme}
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                        <img
                            src={!passwordVisible ? closed : open}
                            alt="Toggle password visibility"
                            style={{
                                cursor: 'pointer',
                                width: '1rem',
                                zIndex: 1,
                            }}
                        />
                    </IconWrapper>
                )}
            </InputWrapper>
            {displayError && error && <Error theme={theme}>{error}</Error>}
        </LabelWrapper>
    );
};

/**
 * TextArea component for multi-line text input.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name attribute of the textarea.
 * @param {string} props.placeholder - The placeholder text for the textarea.
 * @param {string} props.value - The current value of the textarea.
 * @param {function} props.onChange - Function to handle textarea changes.
 * @param {number} props.minRows - Minimum number of rows for the textarea.
 * @param {Object} [props.options] - Additional options for the textarea.
 * @param {boolean} [props.options.disabled] - Whether the textarea is disabled.
 * @param {boolean} [props.options.readOnly] - Whether the textarea is read-only.
 * @param {boolean|string} [props.options.required] - Whether the textarea is required and optional error message.
 * @param {number|Object} [props.options.maxLength] - Maximum length of textarea and optional error message.
 * @param {number|Object} [props.options.minLength] - Minimum length of textarea and optional error message.
 * @param {boolean} [props.options.displayError=true] - Whether to display error messages.
 * @param {string} [props.ariaLabel] - Aria label for accessibility.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the textarea.
 * @param {string} [props.label] - Label for the textarea field.
 * @returns {JSX.Element} A textarea element with optional label and error message.
 *
 * @example
 * <TextArea
 *    name="userBio"
 *    placeholder="Tell us about yourself"
 *    value={userBio}
 *    onChange={(e) => setUserBio(e.target.value)}
 *    minRows={3}
 *    options={{
 *      required: 'Bio is required',
 *      maxLength: { value: 500, message: 'Bio is too long (max 500 characters)' },
 *      minLength: { value: 50, message: 'Bio is too short (min 50 characters)' },
 *    }}
 *    ariaLabel="User Bio"
 *    size="medium"
 *    label="Tell us about yourself"
 * />
 */
export const TextArea: React.FC<TextAreaProps> = ({
    name,
    placeholder,
    value,
    onChange,
    options,
    ariaLabel,
    size = 'small',
    label,
    minRows = 3,
}: TextAreaProps) => {
    const { theme } = useTheme();
    const [error, setError] = React.useState<string | null>(null);

    const {
        required,
        disabled,
        readOnly,
        maxLength,
        minLength,
        displayError = true,
    } = options || {};

    const validateField = React.useCallback(() => {
        if (required && !value) {
            setError(
                typeof required === 'string'
                    ? required
                    : 'This field is required',
            );
            return;
        }

        if (
            maxLength &&
            value.length >
                (typeof maxLength === 'object' ? maxLength.value : maxLength)
        ) {
            setError(
                typeof maxLength === 'object'
                    ? maxLength.message
                    : 'Input too long',
            );
            return;
        }

        if (
            minLength &&
            value.length <
                (typeof minLength === 'object' ? minLength.value : minLength)
        ) {
            setError(
                typeof minLength === 'object'
                    ? minLength.message
                    : 'Input too short',
            );
            return;
        }

        setError(null);
    }, [value, required, maxLength, minLength]);

    return (
        <LabelWrapper>
            {label && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Label htmlFor={name} theme={theme} $size={size}>
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
            <InputWrapper
                $hasError={!!error}
                $size={size}
                $disabled={!!disabled}
                theme={theme}
            >
                <StyledTextArea
                    $hasError={!!error}
                    $size={size}
                    $disabled={!!disabled}
                    theme={theme}
                    id={name}
                    rows={minRows}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={validateField}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    aria-label={ariaLabel}
                    required={required ? true : false}
                />
            </InputWrapper>
            {displayError && error && <Error theme={theme}>{error}</Error>}
        </LabelWrapper>
    );
};
