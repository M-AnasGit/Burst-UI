import { Modal, ModalProps } from '../components/modals/Modal';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta = {
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A modal component that can be used to display messages and confirmations.',
            },
        },
    },
    argTypes: {
        title: {
            description: 'The title of the modal.',
            control: {
                type: 'text',
            },
        },
        message: {
            description: 'The message to display in the modal.',
            control: {
                type: 'text',
            },
        },
        minWidth: {
            description: 'The minimum width of the modal.',
            control: {
                type: 'text',
            },
        },
        customMessages: {
            description: 'An array of custom messages to display in the modal.',
            control: {
                type: 'object',
            },
        },
        confirmText: {
            description: 'The text to display on the confirm button.',
            control: {
                type: 'text',
            },
        },
        cancelText: {
            description: 'The text to display on the cancel button.',
            control: {
                type: 'text',
            },
        },
        size: {
            description: 'The size of the modal.',
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
    args: {
        onConfirm: fn(),
        onCancel: fn(),
    },
    render: (args: any) => {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Modal {...args} />
            </div>
        );
    },
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
    args: {
        title: 'Default Modal',
        message: 'This is a default modal.',
        confirmText: 'Confirm',
        cancelText: 'Cancel',
    },
};

export const CustomWarningMessage: Story = {
    args: {
        title: 'Custom Messages Modal',
        message: 'This is a modal with custom messages.',
        customMessages: [
            {
                type: 'warning',
                title: 'Warning',
                message: 'This is a warning message.',
            },
        ],
        confirmText: 'Confirm',
        cancelText: 'Cancel',
    },
};

export const CustomErrorMessages: Story = {
    args: {
        title: 'Custom Messages Modal',
        message: 'This is a modal with custom messages.',
        customMessages: [
            {
                type: 'error',
                title: 'Error',
                message: 'This is an error message.',
            },
        ],
        confirmText: 'Confirm',
        cancelText: 'Cancel',
    },
};

export const CustomSuccessMessages: Story = {
    args: {
        title: 'Custom Messages Modal',
        message: 'This is a modal with custom messages.',
        customMessages: [
            {
                type: 'success',
                title: 'Success',
                message: 'This is a success message.',
            },
        ],
        confirmText: 'Confirm',
        cancelText: 'Cancel',
    },
};

export const CustomInfoMessages: Story = {
    args: {
        title: 'Custom Messages Modal',
        message: 'This is a modal with custom messages.',
        customMessages: [
            {
                type: 'info',
                title: 'Info',
                message: 'This is an info message.',
            },
        ],
        confirmText: 'Confirm',
        cancelText: 'Cancel',
    },
};
