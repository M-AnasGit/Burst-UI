import styled, { css, keyframes } from 'styled-components';

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

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
`;

// prettier-ignore
export const StyledButton = styled.button<{
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
        border-color: ${({ theme }) => theme.colors.border.hover};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
        background-color: ${({ theme }) => theme.colors.background.active};
        transform: scale(0.95);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.border.focus};
        outline-offset: 2px;
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

// prettier-ignore
export const StyledNotification = styled.span<{
    $isNotify: boolean;
    $size: sizes;
}>
`
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
        $isNotify
            ? css`
                  ${notifyKeyframes} ${theme.transitions.xslow}
              `
            : 'none'};
`;

// prettier-ignore
export const RoundedButton = styled.button<{
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

    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.border.focus};
        outline-offset: 2px;
    }
`;
