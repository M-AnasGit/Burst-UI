interface ProgressProps {
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
