import React from 'react';

import { RoundedButton } from './styles';
import { useDimensions } from './hooks';

import { useTheme } from '../../themeContext';
import { Spinner } from '../loaders/Spinner';

export interface ActionButtonProps extends BaseButtonProps {
    width?: number | string;
    height?: number | string;
    active?: boolean;
}

/**
 * Action button component.
 */
export const ActionButton: React.FC<ActionButtonProps> = ({
    onClick,
    children,
    disabled = false,
    size = 'small',
    ariaLabel,
    loading = false,
    active = false,
    width = 40,
    height = 40,
}: ActionButtonProps) => {
    const { theme } = useTheme();

    const handleClick = React.useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            if (disabled || loading) return;
            onClick();
        },
        [onClick, disabled, loading],
    );

    const { width: buttonWidth, height: buttonHeight } = useDimensions(
        width,
        height,
    );

    return (
        <RoundedButton
            $active={active}
            $disabled={disabled}
            $loading={loading}
            $buttonWidth={buttonWidth}
            $buttonHeight={buttonHeight}
            $size={size}
            theme={theme}
            onClick={handleClick}
            disabled={disabled}
            aria-disabled={disabled || loading}
            aria-label={ariaLabel}
        >
            {loading ? <Spinner size={size} /> : children}
        </RoundedButton>
    );
};
