import styled, { keyframes } from "styled-components";

const appearFromTop = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
`

const appearFromBottom = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
`
export const FeedbackWrapper = styled.div<{
    $size: sizes;
    $position: feedbackPositions;
    $show: boolean;
    $display: 'flex' | 'none';
    $type: feedbackTypes;
    $minWidth: string;
}>
`
    min-width: ${({ $minWidth }) => $minWidth};

    position: fixed;
    ${({ $position }) => {
        switch ($position) {
            case 'top-left':
                return 'top: 0; left: 0;';
            case 'top-right':
                return 'top: 0; right: 0;';
            case 'bottom-left':
                return 'bottom: 0; left: 0;';
            case 'bottom-right':
                return 'bottom: 0; right: 0;';
        }
    }}

    display: ${({ $display }) => $display};
    opacity: ${({ $show }) => $show ? 1 : 0};
    transition: opacity 0.5s ease;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${({ theme, $size }) => theme.components.feedbacks.padding[$size]};

    background-color: ${({ theme, $type }) => theme.components.feedbacks.custom.colors[$type].background};
    border-radius: ${({ theme, $size }) => theme.components.feedbacks.radius[$size]};

    animation: ${({ $position }) => $position === 'top-left' || $position === 'top-right' ? appearFromTop : appearFromBottom} 0.5s ease;
`

export const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
`

export const IconWrapper = styled.div<{
    $size: sizes;   
}>
`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    img {
        width: ${({ theme, $size }) => theme.components.feedbacks.sizes[$size]};
        height: ${({ theme, $size }) => theme.components.feedbacks.sizes[$size]};
    }
`

export const TextWrapper = styled.div<{
    $size: sizes;
}>
`
    display: block;
`

export const Title = styled.h3<{ $size: sizes, $type: feedbackTypes }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.components.feedbacks.custom.fontSizes.title[$size]};
    font-weight: 500;
    color: ${({ theme, $type }) => theme.components.feedbacks.custom.colors[$type].border};

    margin: 0;
`

export const Message = styled.p<{ $size: sizes }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.components.feedbacks.custom.fontSizes.message[$size]};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
`

export const StyledButton = styled.button<{
    $size: sizes;
    $type: feedbackTypes;
}>`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};

    background-color: transparent;
    color: ${({ theme, $type }) => theme.components.feedbacks.custom.colors[$type].border};

    border: none;
    border-radius: ${({ theme, $size }) =>
        theme.components.buttons?.radius[$size] || '4px'};


    transition:
        background-color ${({ theme }) => theme.transitions.slow},
        box-shadow ${({ theme }) => theme.transitions.slow},
        transform ${({ theme }) => theme.transitions.slow},
        opacity ${({ theme }) => theme.transitions.slow};

    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.border.focus};
        outline-offset: 2px;
    }
`;