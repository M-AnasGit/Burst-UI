import React from 'react';
import { useTheme } from '../../themeContext';
import styled from 'styled-components';

import Spinner from '../utils/Spinner';

const useDimensions = (width: number | string, height: number | string) => {
    return {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };
};

// prettier-ignore
const RoundedButton = styled.button<{
    $active: boolean;
    $disabled: boolean;
    $loading: boolean;
    $buttonWidth: string;
    $buttonHeight: string;
    $size: string;
}>
`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

    background-color: ${({ theme, $disabled, $active }) =>
        $disabled
            ? theme.colors.background.disabled
            : $active
              ? theme.colors.background.active
              : theme.colors.background.normal};
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};
    box-shadow: ${({ theme }) =>
        theme.theme === 'dark'
            ? theme.components.buttons.darkshadow
            : theme.components.buttons.lightshadow};

    width: ${({ $buttonWidth }) => $buttonWidth};
    height: ${({ $buttonHeight }) => $buttonHeight};
    border: 1px solid ${({ theme }) => theme.colors.border.normal};
    border-radius: 50%;

    cursor: ${({ $disabled, $loading }) =>
        $disabled || $loading ? 'not-allowed' : 'pointer'};
    transition:
        background-color ${({ theme }) => theme.transitions.slow},
        box-shadow ${({ theme }) => theme.transitions.slow},
        transform ${({ theme }) => theme.transitions.slow},
        opacity ${({ theme }) => theme.transitions.slow};


    &:active:not(:disabled):not([aria-disabled='true']) {
        background-color: ${({ theme }) => theme.colors.background.active};
        transform: scale(0.95);
    }

    &:hover:not(:disabled):not([aria-disabled='true']) {
        background-color: ${({ theme, $active }) =>
            !$active && theme.colors.background.hover};
    }
`;

/**
 * ActionButton component for circular, icon-based actions.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onClick - Function to call when button is clicked.
 * @param {React.ReactNode} props.children - The content to display inside the button (typically an icon).
 * @param {boolean} [props.disabled=false] - If true, the button will be disabled and unclickable.
 * @param {('small'|'medium'|'large')} [props.size='small'] - The button's size, affecting font size.
 * @param {string} [props.ariaLabel] - Accessibility label for the button. Essential for icon buttons.
 * @param {boolean} [props.loading=false] - If true, displays a loading spinner instead of children and disables the button.
 * @param {boolean} [props.active=false] - If true, the button will appear in an active state.
 * @param {number|string} [props.width=40] - The width of the button. Can be a number (interpreted as pixels) or a string (e.g., '100%'). (default: 40)
 * @param {number|string} [props.height=40] - The height of the button. Can be a number (interpreted as pixels) or a string (e.g., '100%'). (default: 40)
 *
 * @example
 * <ActionButton
 *   onClick={() => console.log('Action button clicked')}
 *   size="medium"
 *   ariaLabel="Add item"
 *   width={50}
 *   height={50}
 * >
 *   <PlusIcon />
 * </ActionButton>
 *
 * @returns {JSX.Element} A styled circular button element.
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
            {loading ? <Spinner theme={theme} /> : children}
        </RoundedButton>
    );
};
