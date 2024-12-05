import React from 'react';

import { useTheme } from '../../themeContext';

import {
    FlexRowWrapper,
    FlexColumnWrapper,
    InputWrapper,
    Error,
    StyledTextArea,
    Required,
} from './styles';
import Label from '../utils/Label';

export interface TextareaProps extends FormProps {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
    minRows: number;
    options?: TextAreaOptions;
}

export const Textarea: React.FC<TextareaProps> = ({
    name,
    placeholder,
    value,
    onChange,
    options,
    ariaLabel,
    size = 'small',
    label,
    minRows = 3,
}: TextareaProps) => {
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
        </FlexColumnWrapper>
    );
};
