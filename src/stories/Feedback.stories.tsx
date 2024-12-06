import { Feedback, FeedbackProps } from '../components/feedback/Feedback';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = FeedbackProps;

const meta: Meta = {
    component: Feedback,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A feedback component that displays a message to the user',
            },
        },
    },
    argTypes: {
        title: {
            description: 'The title of the feedback',
            table: {
                category: 'Content',
            },
        },
        message: {
            description: 'The message of the feedback',
            table: {
                category: 'Content',
            },
        },
        type: {
            description: 'The type of feedback',
            options: ['info', 'success', 'warning', 'error'],
            table: {
                category: 'radio',
            },
        },
        position: {
            description: 'The position of the feedback',
            options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
            table: {
                category: 'radio',
            },
        },
        timer: {
            description:
                'The time in milliseconds before the feedback disappears',
            table: {
                category: 'number',
            },
        },
        size: {
            description: 'The size of the feedback',
            options: ['small', 'medium', 'large'],
            table: {
                category: 'radio',
            },
        },
    },
    render: (args: any) => {
        return (
            <div
                style={{
                    width: '100%',
                    height: '50vh',
                }}
            >
                <Feedback {...args} />
            </div>
        );
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        title: 'Title',
        message: 'Message',
        type: 'info',
        position: 'top-right',
        timer: 5000,
        size: 'small',
    },
};

export const Success: Story = {
    args: {
        title: 'Success',
        message: 'Success message',
        type: 'success',
        position: 'top-right',
        timer: 5000,
        size: 'small',
    },
};

export const Warning: Story = {
    args: {
        title: 'Warning',
        message: 'Warning message',
        type: 'warning',
        position: 'top-right',
        timer: 5000,
        size: 'small',
    },
};

export const Error: Story = {
    args: {
        title: 'Error',
        message: 'Error message',
        type: 'error',
        position: 'top-right',
        timer: 5000,
        size: 'small',
    },
};

export const bottomLeft: Story = {
    args: {
        title: 'Title',
        message: 'Message',
        type: 'info',
        position: 'bottom-left',
        timer: 5000,
        size: 'small',
    },
};

export const bottomRight: Story = {
    args: {
        title: 'Title',
        message: 'Message',
        type: 'info',
        position: 'bottom-right',
        timer: 5000,
        size: 'small',
    },
};

export const topLeft: Story = {
    args: {
        title: 'Title',
        message: 'Message',
        type: 'info',
        position: 'top-left',
        timer: 5000,
        size: 'small',
    },
};
