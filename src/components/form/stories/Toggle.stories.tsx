import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Toggle } from '../Toggle';

export default {
    title: 'Components/Form/Toggle',
    component: Toggle,
    argTypes: {
        onChange: { action: 'changed' },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        label: { control: 'text' },
        inline: { control: 'boolean' },
        checked: { control: 'boolean' },
        required: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<ToggleProps> = (args: ToggleProps) => {
    const [checked, setChecked] = React.useState(args.checked);
    return (
        <Toggle
            {...args}
            checked={checked}
            onChange={(e) => {
                setChecked(e.target.checked);
            }}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    label: 'Toggle Switch',
};

export const Checked = Template.bind({});
Checked.args = {
    ...Default.args,
    checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    ...Default.args,
    size: 'large',
};

export const VerticalLayout = Template.bind({});
VerticalLayout.args = {
    ...Default.args,
    inline: false,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    checked: false,
};
