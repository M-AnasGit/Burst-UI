import React from 'react';

import {
    ProgressBarWrapper,
    StyledProgressBarContainer,
    StyledProgressBar,
    ProgressLabel,
} from './styles';
import { useTheme } from '../../themeContext';

export interface ProgressProps {
    start_at: number;
    block_at: number;
    progress_by: number;
    progress_rate: number;
    show_progress: boolean;
    show_labels: boolean;
    progress_labels: string[];
    finished: boolean;
    color?: string;
    size?: sizes;
}

export const ProgressBar: React.FC<ProgressProps> = ({
    start_at,
    block_at,
    progress_by,
    progress_rate,
    show_progress,
    show_labels,
    progress_labels,
    finished,
    color,
    size = 'small',
}: ProgressProps) => {
    const { theme } = useTheme();

    const [progress, setProgress] = React.useState<number>(start_at);
    const [currentLabel, setCurrentLabel] = React.useState<string>('');

    React.useEffect(() => {
        const progressBar = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < block_at) {
                    const increment = Math.min(
                        progress_by,
                        block_at - prevProgress,
                    );
                    const newProgress = prevProgress + increment;
                    const labelIndex = Math.min(
                        Math.ceil((newProgress - start_at) / progress_by),
                        progress_labels.length - 1,
                    );
                    setCurrentLabel(progress_labels[labelIndex]);
                    return newProgress;
                } else {
                    clearInterval(progressBar);
                    return prevProgress;
                }
            });
        }, progress_rate);

        if (finished) {
            setProgress(100);
            clearInterval(progressBar);
            setCurrentLabel(progress_labels[progress_labels.length - 1]);
        }

        return () => clearInterval(progressBar);
    }, [
        start_at,
        block_at,
        progress_by,
        progress_rate,
        finished,
        progress_labels,
    ]);

    return (
        <ProgressBarWrapper $size={size} $direction="row" theme={theme}>
            <ProgressBarWrapper $size={size} $direction="column" theme={theme}>
                <StyledProgressBarContainer $size={size} theme={theme}>
                    <StyledProgressBar
                        $size={size}
                        $progress={progress}
                        $progress_rate={progress_rate}
                        $color={color}
                        theme={theme}
                        aria-valuenow={progress}
                        aria-valuemin={start_at}
                        aria-valuemax={block_at}
                    />
                </StyledProgressBarContainer>
                {show_progress && (
                    <ProgressLabel $size={size} theme={theme}>
                        {progress}%
                    </ProgressLabel>
                )}
            </ProgressBarWrapper>
            {show_labels && (
                <ProgressLabel $size={size} theme={theme}>
                    {currentLabel}
                </ProgressLabel>
            )}
        </ProgressBarWrapper>
    );
};
