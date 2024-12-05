import React from 'react';

import { useTheme } from '../../themeContext';

import {
    FlexRowWrapper,
    FlexColumnWrapper,
    InputWrapper,
    IconWrapper,
    Error,
    StyledInput,
    Required,
} from './styles';
import Label from '../utils/Label';

import closed from '../../assets/l-eye-closed.svg';
import open from '../../assets/l-eye.svg';

export interface InputProps extends FormProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    options?: InputOptions;
}

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

    React.useEffect(() => {
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
            } else {
                regex = pattern || new RegExp('');
            }
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
        <FlexColumnWrapper>
            {label && (
                <FlexRowWrapper>
                    <Label htmlFor={name} theme={theme} $size={size}>
                        {label}
                    </Label>
                    {required && <Required theme={theme}>*</Required>}
                </FlexRowWrapper>
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
        </FlexColumnWrapper>
    );
};
