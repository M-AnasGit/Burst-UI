import React from 'react';

import { StyledButton, StyledNotification, Wrapper } from './styles';
import { useNotification } from './hooks';

import { useTheme } from '../../themeContext';
import { Spinner } from '../loaders/Spinner';

export interface ButtonProps extends BaseButtonProps {
    variant?: ButtonVariant;
}

/**
 * Button component.
 */
export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    disabled = false,
    variant = 'primary',
    size = 'small',
    notifyText,
    ariaLabel,
    loading = false,
}: ButtonProps) => {
    const { theme } = useTheme();
    const { isNotify, triggerNotification } = useNotification();

    const handleClick = React.useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            if (disabled || loading) return;
            if (notifyText) {
                triggerNotification();
            }
            onClick();
        },
        [onClick, notifyText, triggerNotification, disabled, loading],
    );

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent) => {
            if ((e.key === 'Enter' || e.key === ' ') && !disabled && !loading) {
                e.preventDefault();
                handleClick(e as unknown as React.MouseEvent);
            }
        },
        [handleClick, disabled, loading],
    );

    return (
        <Wrapper>
            <StyledNotification
                $isNotify={isNotify}
                $size={size}
                theme={theme}
                aria-live="polite"
                aria-atomic="true"
                aria-describedby={notifyText ? 'notification' : undefined}
            >
                {notifyText}
            </StyledNotification>
            <StyledButton
                $disabled={disabled}
                $loading={loading}
                $variant={variant}
                $size={size}
                theme={theme}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                aria-disabled={disabled || loading}
                aria-label={ariaLabel}
            >
                {loading ? <Spinner size={size} isLabel={false} /> : children}
            </StyledButton>
        </Wrapper>
    );
};
