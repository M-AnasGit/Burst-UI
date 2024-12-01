import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RadioGroup } from '../Radio';

export default {
    title: 'Components/Form/Radio',
    component: RadioGroup,
    argTypes: {
        direction: {
            options: ['row', 'column'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        onChange: { action: 'changed' },
        name: { control: 'text' },
        options: {
            control: 'object',
            description:
                'Array of radio options with labels and disabled states.',
        },
        selected: { control: 'number' },
        label: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<RadioGroupProps> = (args: RadioGroupProps) => {
    const [selected, setSelected] = React.useState(0);
    return (
        <RadioGroup
            {...args}
            selected={selected}
            onChange={(index) => setSelected(index)}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    name: 'default-radio',
    options: [
        { label: 'Option 1' },
        { label: 'Option 2' },
        { label: 'Option 3' },
    ],
    label: 'Choose an option',
};

export const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
    ...Default.args,
    options: [
        { label: 'Option 1' },
        { label: 'Option 2' },
        { label: 'Option 3', disabled: true },
    ],
};

export const ColumnLayout = Template.bind({});
ColumnLayout.args = {
    ...Default.args,
    direction: 'column',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    ...Default.args,
    size: 'large',
};

export const DisabledGroup = Template.bind({});
DisabledGroup.args = {
    ...Default.args,
    disabled: true,
};
