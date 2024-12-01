import React from 'react';
import { useTheme } from '../../themeContext';
import styled, { css, keyframes } from 'styled-components';
import Spinner from '../utils/Spinner';

const useNotification = (duration: number = 500) => {
    const [isNotify, setIsNotify] = React.useState(false);

    const triggerNotification = React.useCallback(() => {
        setIsNotify(true);
        setTimeout(() => setIsNotify(false), duration);
    }, [duration]);

    return { isNotify, triggerNotification };
};

const notifyKeyframes = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    50% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(0);
        opacity: 0;
    }
`;

// prettier-ignore
const ButtonComp = styled.button<{
    $disabled: boolean;
    $loading: boolean;
    $variant: string;
    $size: sizes;
}>
`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

    background-color: ${({ theme, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : theme.colors.background.normal};
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};

    border-radius: ${({ theme, $size }) =>
        theme.components.buttons?.radius[$size] || '4px'};

    padding: ${({ theme, $size }) =>
        theme.components.buttons.padding?.[$size] || '8px 16px'};

    transition:
        background-color ${({ theme }) => theme.transitions.slow},
        box-shadow ${({ theme }) => theme.transitions.slow},
        transform ${({ theme }) => theme.transitions.slow},
        opacity ${({ theme }) => theme.transitions.slow};
    cursor: ${({ $disabled, $loading }) =>
        $disabled || $loading ? 'not-allowed' : 'pointer'};

    &:hover:not(:disabled):not([aria-disabled='true']) {
        background-color: ${({ theme }) => theme.colors.background.hover};
        border-color: ${({ theme }) =>  theme.colors.border.hover};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
        background-color: ${({ theme }) => theme.colors.background.active};
        transform: scale(0.95);
    }

    ${({ $variant, theme }) =>
        $variant === 'primary' &&
        css`
            border: 1px solid ${theme.colors.border.normal};
            box-shadow: ${theme.theme === 'dark'
                ? theme.components.buttons.darkshadow
                : theme.components.buttons.lightshadow};
        `}

    ${({ $variant, theme }) =>
        $variant === 'outline' &&
        css`
            background-color: transparent;
            border: 1px solid ${theme.colors.textPrimary};
        `}

    ${({ $variant }) =>
        $variant === 'text' &&
        css`
            background-color: transparent;
            border: none;
        `}
`;

const Notification = styled.span<{ $isNotify: boolean; $size: sizes }>`
    position: absolute;
    top: ${({ theme, $size }) => theme.components.buttons.positions.top[$size]};
    right: 0;
    z-index: -1;

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) =>
        theme.components.buttons.custom.notifications[$size]};

    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0;

    animation: ${({ $isNotify, theme }) =>
        $isNotify &&
        css`
            ${notifyKeyframes} ${theme.transitions.xslow}
        `};
`;

/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onClick - Function to call when button is clicked.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {boolean} [props.disabled=false] - If true, the button will be disabled and unclickable.
 * @param {('primary'|'outline'|'text')} [props.variant='primary'] - The button's visual style.
 *   - 'primary': Main call-to-action style.
 *   - 'outline': Secondary action with border.
 *   - 'text': Least prominent, text-only style.
 * @param {('small'|'medium'|'large')} [props.size='small'] - The button's size, affecting padding and font size.
 * @param {string} [props.notifyText] - Text to display as a temporary notification when clicked.
 * @param {string} [props.ariaLabel] - Accessibility label for the button. Use this to provide more context for screen readers.
 * @param {boolean} [props.loading=false] - If true, displays a loading spinner instead of children and disables the button.
 *
 * @example
 * <Button
 *   onClick={() => console.log('Button clicked')}
 *   variant="primary"
 *   size="medium"
 *   notifyText="Submitted!"
 *   ariaLabel="Submit form"
 * >
 *   Submit
 * </Button>
 *
 * @returns {JSX.Element} A styled button element.
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

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <Notification
                $isNotify={isNotify}
                $size={size}
                theme={theme}
                aria-live="polite"
                aria-atomic="true"
            >
                {notifyText}
            </Notification>
            <ButtonComp
                $disabled={disabled}
                $loading={loading}
                $variant={variant}
                $size={size}
                theme={theme}
                onClick={handleClick}
                disabled={disabled}
                aria-disabled={disabled || loading}
                aria-label={ariaLabel}
            >
                {loading ? <Spinner theme={theme} /> : children}
            </ButtonComp>
        </div>
    );
};
