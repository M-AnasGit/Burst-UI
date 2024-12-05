import styled, { keyframes } from 'styled-components';
import Label from '../utils/Label';

// Keyframes & animations
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`;

// Spinner wrapper
export const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SpinnerLabel = styled(Label)`
    margin-bottom: 0;
    margin-top: ${({ theme, $size }) =>
        theme.components.spinners.padding[$size]};
`;

// Spinner component
export const StyledSpinner = styled.div<{
    $size: sizes;
    $color: string;
    $speed: speed;
    $fillColor: string;
}>
`
    border: ${({ theme, $size }) =>
            theme.components.spinners.custom.borderWidth[$size]}
        solid ${({ theme, $fillColor }) => $fillColor || theme.colors.border.normal};

    border-top: ${({ theme, $size }) =>
            theme.components.spinners.custom.borderWidth[$size]}
        solid ${({ theme, $color }) => $color || theme.colors.textPrimary};
    border-radius: 50%;
    width: ${({ theme, $size }) => theme.components.spinners.sizes[$size]};
    height: ${({ theme, $size }) => theme.components.spinners.sizes[$size]};
    animation: ${spin}
        ${({ theme, $speed }) => theme.components.spinners.custom.speed[$speed]}
        linear infinite;
`;

// Skeleton wrapper
export const SkeletonWrapper = styled.div<{ $size: sizes}>`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: ${({ theme, $size }) =>
        theme.components.skeletons.padding[$size] || '0.5rem'};
`

export const SkeletonItemWrapper = styled.div<{ $width: string; $spacing: string}>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.components.skeletons.padding.small || '0.5rem'};
`

export const SkeletonFlexWrapper = styled.div<{
    $size: sizes;
    $direction: 'row' | 'column';
    $justify: string;
    $align: string;
    $width: string;
    $height: string;
}>
`
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
    justify-content: ${({ $justify }) => $justify};
    align-items: ${({ $align }) => $align};
    gap: ${({ theme, $size }) =>
        theme.components.skeletons.padding[$size] || '0.5rem'};
    flex-wrap: wrap;

    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
`

// Skeleton component
const BaseSkeleton = styled.div<{
    $width: string;
    $height: string;
    $color?: string;
    $speed?: speed;
}>
`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};

    background-color: ${({ theme, $color }) =>
        $color ? $color : theme.colors.background.active};

    animation: ${pulse}
        ${({ theme, $speed }) =>
            $speed ? theme.components.skeletons.custom.speed[$speed] : '1s'}
        infinite;
`;

export const SkeletonBar = styled(BaseSkeleton)`
    border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export const SkeletonCircle = styled(BaseSkeleton)`
    border-radius: 50%;
`;