import { StoryFn, Meta } from '@storybook/react';
import { Skeleton } from '../Skeleton';

export default {
    title: 'Components/Loaders/Skeleton',
    component: Skeleton,
    argTypes: {
        model: {
            control: 'select',
            options: ['article', 'card', 'comment', 'profile', 'custom'],
            description: 'Predefined model or custom configuration',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size of the skeleton components',
        },
        speed: {
            control: 'select',
            options: ['slow', 'normal', 'fast'],
            description: 'Animation speed of the skeleton',
        },
        color: {
            control: 'color',
            description: 'Custom color for the skeleton components',
        },
    },
} as Meta;

const Template: StoryFn<SkeletonProps> = (args: SkeletonProps) => (
    <Skeleton {...args} />
);

export const Article = Template.bind({});
Article.args = {
    model: 'article',
    size: 'medium',
    speed: 'normal',
};

export const Card = Template.bind({});
Card.args = {
    model: 'card',
    size: 'small',
    speed: 'normal',
};

export const Comment = Template.bind({});
Comment.args = {
    model: 'comment',
    size: 'small',
    speed: 'normal',
};

export const Profile = Template.bind({});
Profile.args = {
    model: 'profile',
    size: 'medium',
    speed: 'normal',
};

export const CustomModel = Template.bind({});
CustomModel.args = {
    model: [
        { type: 'circle', width: '50px', height: '50px' },
        { type: 'text', width: '100%', height: '20px', lines: 3 },
        {
            type: 'flex-container',
            width: '100%',
            height: 'auto',
            justify: 'space-between',
            align: 'center',
            direction: 'row',
            items: [
                { type: 'block', width: '30%', height: '30px' },
                { type: 'block', width: '30%', height: '30px' },
                { type: 'block', width: '30%', height: '30px' },
            ],
        },
    ],
    size: 'large',
    speed: 'fast',
    color: '#e0e0e0',
};
