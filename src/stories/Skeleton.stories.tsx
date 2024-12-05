import { Skeleton, SkeletonProps } from '../components/loaders/Skeleton';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = SkeletonProps;

const meta: Meta = {
    component: Skeleton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Skeleton component',
            },
        },
    },
    argTypes: {
        model: {
            control: 'radio',
            options: ['article', 'card', 'comment', 'profile'],
        },
        color: {
            control: 'color',
            description: 'Color of the skeleton',
        },
        speed: {
            control: 'radio',
            options: ['slow', 'normal', 'fast'],
            description: 'Speed of the skeleton',
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'Size of the skeleton',
        },
    },
    render: (args: any) => {
        return <Skeleton {...args} />;
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        model: 'article',
        size: 'small',
        speed: 'normal',
    },
};

export const Card: Story = {
    args: {
        model: 'card',
        size: 'small',
        speed: 'normal',
    },
};

export const Comment: Story = {
    args: {
        model: 'comment',
        size: 'small',
        speed: 'normal',
    },
};

export const Profile: Story = {
    args: {
        model: 'profile',
        size: 'small',
        speed: 'normal',
    },
};
