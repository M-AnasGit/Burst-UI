import React from 'react';
import styled from 'styled-components';

import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

const StyledProgressBar = styled.div<{ $size: string }>`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.background.normal};

    border: 1px solid ${({ theme }) => theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.progress.radius[$size]};
`;

const ProgressLabel = styled(Label)`
    text-align: center;
    margin-bottom: 0;
`;

/**
 * Bar component for displaying progress.
 *
 * @param {Object} props - The component props.
 * @param {number} props.start_at - The starting value of the progress bar.
 * @param {number} props.block_at - The maximum value of the progress bar.
 * @param {number} props.progress_by - The increment value for each progress step.
 * @param {number} props.progress_rate - The rate of progress updates in milliseconds.
 * @param {boolean} props.show_progress - Whether to display the progress percentage.
 * @param {boolean} props.show_labels - Whether to display progress labels.
 * @param {string[]} props.progress_labels - Array of labels for different progress stages.
 * @param {boolean} props.finished - Whether the progress is complete.
 * @param {string} [props.color] - Custom color for the progress bar.
 * @param {'small'|'medium'|'large'} [props.size='small'] - Size of the progress bar.
 * @returns {JSX.Element} A styled progress bar component.
 *
 * @example
 * <ProgressBar
 *   start_at={0}
 *   block_at={100}
 *   progress_by={25}
 *   progress_rate={1000}
 *   show_progress={true}
 *   show_labels={true}
 *   progress_labels={['Start', 'Quarter', 'Half', 'Three Quarters', 'Complete']}
 *   finished={false}
 *   color="#007bff"
 * />
 */
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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: theme.components.progress.padding
                    ? theme.components.progress.padding[size]
                    : '0.5rem',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: theme.components.progress.padding
                        ? theme.components.progress.padding[size]
                        : '0.5rem',
                }}
            >
                <StyledProgressBar $size={size} theme={theme}>
                    <div
                        style={{
                            width: `${progress}%`,
                            height: '100%',
                            backgroundColor:
                                color || theme.colors.background.active,
                            borderRadius: `${
                                theme.components.progress.radius
                                    ? theme.components.progress.radius[size]
                                    : '0.5rem'
                            }`,
                            transition: `width ${progress_rate / 2}ms ease-in-out`,
                        }}
                        aria-valuenow={progress}
                        aria-valuemin={start_at}
                        aria-valuemax={block_at}
                    />
                </StyledProgressBar>
                {show_progress && (
                    <ProgressLabel $size={size} theme={theme}>
                        {progress}%
                    </ProgressLabel>
                )}
            </div>
            {show_labels && (
                <ProgressLabel $size={size} theme={theme}>
                    {currentLabel}
                </ProgressLabel>
            )}
        </div>
    );
};
