import React from 'react';
import { ProgressBar, ProgressProps } from '../components/progress/Bar';
import { StoryObj, Meta } from '@storybook/react/*';

type StoryProps = StoryObj<ProgressProps>;

const meta: Meta = {
    component: ProgressBar,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A progress bar component.',
            },
        },
    },
    argTypes: {
        start_at: {
            description: 'The starting point of the progress bar.',
            control: {
                type: 'number',
            },
        },
        block_at: {
            description: 'The point at which the progress bar stops.',
            control: {
                type: 'number',
            },
        },
        progress_by: {
            description: 'The amount by which the progress bar progresses.',
            control: {
                type: 'number',
            },
        },
        progress_rate: {
            description: 'The rate at which the progress bar progresses.',
            control: {
                type: 'number',
            },
        },
        show_progress: {
            description: 'Whether to show the progress bar.',
            control: {
                type: 'boolean',
            },
        },
        show_labels: {
            description: 'Whether to show the progress labels.',
            control: {
                type: 'boolean',
            },
        },
        progress_labels: {
            description: 'The labels to show on the progress bar.',
            control: {
                type: 'object',
            },
        },
        finished: {
            description: 'Whether the progress bar is finished.',
            control: {
                type: 'boolean',
            },
        },
        color: {
            description: 'The color of the progress bar.',
            control: {
                type: 'color',
            },
        },
        size: {
            description: 'The size of the progress bar.',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio',
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        start_at: 0,
        block_at: 100,
        progress_by: 1,
        progress_rate: 100,
        show_progress: true,
        show_labels: true,
        progress_labels: ['0%', '25%', '50%', '75%', '100%'],
        finished: false,
        color: '#000000',
        size: 'small',
    },
};

export const BlockAt60: Story = {
    args: {
        start_at: 0,
        block_at: 60,
        progress_by: 15,
        progress_rate: 1000,
        show_progress: true,
        show_labels: true,
        progress_labels: ['0%', '20%', '40%', '60%', '80%', 'Complete'],
        finished: false,
        color: '#000000',
        size: 'small',
    },
};

export const FinishesEarly: Story = {
    args: {
        start_at: 0,
        block_at: 100,
        progress_by: 25,
        progress_rate: 2000,
        show_progress: true,
        show_labels: true,
        progress_labels: ['0%', '25%', '50%', '75%', '100%'],
        color: '#000000',
        size: 'small',
    },
    render: (args) => {
        const [finished, setFinished] = React.useState<boolean>(false);
        const timeout = setTimeout(() => {
            setFinished(true);
            clearTimeout(timeout);
        }, 6000);

        return <ProgressBar {...args} finished={finished} />;
    },
};

export const NoLabels: Story = {
    args: {
        start_at: 0,
        block_at: 100,
        progress_by: 10,
        progress_rate: 500,
        show_progress: true,
        show_labels: false,
        progress_labels: ['0%', '25%', '50%', '75%', '100%'],
        finished: false,
        color: '#000000',
        size: 'small',
    },
};

export const NoProgress: Story = {
    args: {
        start_at: 0,
        block_at: 100,
        progress_by: 10,
        progress_rate: 500,
        show_progress: false,
        show_labels: true,
        progress_labels: ['0%', '25%', '50%', '75%', '100%'],
        finished: false,
        color: '#000000',
        size: 'small',
    },
};
