import { StoryFn, Meta } from '@storybook/react';
import { Spinner } from '../Spinner';

export default {
    title: 'Components/Loaders/Spinner',
    component: Spinner,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        label: { control: 'text' },
        isLabel: { control: 'boolean' },
        speed: {
            options: ['slow', 'normal', 'fast'],
            control: { type: 'select' },
        },
        color: { control: 'color' },
        fillColor: { control: 'color' },
    },
} as Meta;

const Template: StoryFn<SpinnerProps> = (args: SpinnerProps) => (
    <Spinner {...args} />
);

export const Default = Template.bind({});
Default.args = {
    size: 'small',
    label: 'Loading...',
    isLabel: true,
    speed: 'normal',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
    ...Default.args,
    isLabel: false,
};

export const LargeSpinner = Template.bind({});
LargeSpinner.args = {
    ...Default.args,
    size: 'large',
};

export const FastSpinner = Template.bind({});
FastSpinner.args = {
    ...Default.args,
    speed: 'fast',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
    ...Default.args,
    color: '#007bff',
    fillColor: '#e9ecef',
};
