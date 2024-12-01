import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Slider } from '../Slider';

export default {
    title: 'Components/Form/Slider',
    component: Slider,
    argTypes: {
        onChange: { action: 'changed' },
        name: { control: 'text' },
        value: { control: 'number' },
        min: { control: 'number' },
        max: { control: 'number' },
        label: { control: 'text' },
        ariaLabel: { control: 'text' },
        readOnly: { control: 'boolean' },
        disabled: { control: 'boolean' },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
    },
} as Meta;

// Template for Slider stories
const Template: StoryFn<SliderProps> = (args: SliderProps) => {
    const [value, setValue] = React.useState(args.value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
        args.onChange(e);
    };

    return <Slider {...args} value={value} onChange={handleChange} />;
};

// Default story
export const Default = Template.bind({});
Default.args = {
    name: 'slider',
    value: 500,
    min: 0,
    max: 1000,
    label: 'Adjust Volume',
};

// Disabled story
export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

// Custom Min/Max story
export const CustomRange = Template.bind({});
CustomRange.args = {
    ...Default.args,
    min: 100,
    max: 900,
};

// Small size story
export const SmallSize = Template.bind({});
SmallSize.args = {
    ...Default.args,
    size: 'small',
};

// Large size story
export const LargeSize = Template.bind({});
LargeSize.args = {
    ...Default.args,
    size: 'large',
};
