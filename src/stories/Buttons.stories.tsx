import { Button, ButtonProps } from '../components/buttons/Button';

import { StoryObj, Meta } from '@storybook/react/*';
import { fn } from '@storybook/test';

type StoryProps = ButtonProps & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        buttonText: {
            control: {
                type: 'text',
            },
        },
        variant: {
            options: ['primary', 'outline', 'text'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        loading: {
            control: {
                type: 'boolean',
            },
        },
        notifyText: {
            control: {
                type: 'text',
            },
        },
    },
    args: {
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        buttonText: 'Primary',
        variant: 'primary',
        size: 'small',
        disabled: false,
        loading: false,
        notifyText: 'primary',
    },
    render: ({ buttonText, ...props }) => (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button {...props}>{buttonText}</Button>
        </div>
    ),
};

export const Outline: Story = {
    args: {
        buttonText: 'Outline',
        variant: 'outline',
        size: 'small',
        disabled: false,
        loading: false,
        notifyText: 'outline',
    },
    render: ({ buttonText, ...props }) => (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button {...props}>{buttonText}</Button>
        </div>
    ),
};

export const Text: Story = {
    args: {
        buttonText: 'Text',
        variant: 'text',
        size: 'small',
        disabled: false,
        loading: false,
        notifyText: 'text',
    },
    render: ({ buttonText, ...props }) => (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button {...props}>{buttonText}</Button>
        </div>
    ),
};
