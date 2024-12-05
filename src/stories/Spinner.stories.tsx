import { Spinner, SpinnerProps } from '../components/loaders/Spinner';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = SpinnerProps;

const meta: Meta = {
    component: Spinner,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Spinner component',
            },
        },
    },
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'Size of the spinner',
        },
        speed: {
            control: 'radio',
            options: ['slow', 'normal', 'fast'],
            description: 'Speed of the spinner',
        },
        isLabel: {
            control: 'boolean',
            description: 'Show label with spinner',
        },
        label: {
            control: 'text',
            description: 'Label text for the spinner',
        },
        color: {
            control: 'color',
            description: 'Color of the spinner',
        },
        fillColor: {
            control: 'color',
            description: 'Fill color of the spinner',
        },
    },
    render: (args: any) => {
        return <Spinner {...args} />;
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        size: 'small',
        label: 'Loading...',
        isLabel: true,
        speed: 'normal',
    },
};
