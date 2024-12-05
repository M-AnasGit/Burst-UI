import styled from "styled-components";
import Label from "@components/utils/Label";

export const ProgressBarWrapper = styled.div<{
    $size: sizes
    $direction: 'row' | 'column'
}>
`
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
    justify-content: center;
    gap: ${({ theme, $size }) =>
        theme.components.progress.padding[$size] || '0.5rem'};
`

export const StyledProgressBarContainer = styled.div<{ $size: string }>`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.background.normal};

    border: 1px solid ${({ theme }) => theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.progress.radius[$size]};
`;

export const StyledProgressBar = styled.div<{ 
    $size: string; 
    $progress: number;
    $progress_rate: number;
    $color?: string;
}>
`
    width: ${({ $progress }) => $progress}%;
    height: 100%;
    background-color: ${({ theme, $color }) => $color || theme.colors.background.active};
    border-radius: ${({ theme, $size }) =>
        theme.components.progress.radius[$size]};
    transition: width ${({ $progress_rate }) => $progress_rate}ms linear;
`;

export const ProgressLabel = styled(Label)`
    text-align: center;
    margin-bottom: 0;
`;
