import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Dropdown } from '../Dropdown';

export default {
    title: 'Components/Form/Dropdown',
    component: Dropdown,
    argTypes: {
        onChange: { action: 'changed' },
        name: { control: 'text' },
        placeholder: { control: 'text' },
        NoOptionsMessage: { control: 'text' },
        defaultValue: { control: 'number' },
        label: { control: 'text' },
        ariaLabel: { control: 'text' },
        value: { control: 'text' },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
    },
} as Meta;

// Template for SingleDropdown stories
const SingleTemplate: StoryFn<DropdownProps> = (args: DropdownProps) => {
    const [value, setValue] = React.useState<string | null>(
        args.defaultValue ? args.options[args.defaultValue] : null,
    );

    return <Dropdown {...args} value={value} onChange={setValue} />;
};

// Default story for SingleDropdown
export const DefaultSingle = SingleTemplate.bind({});
DefaultSingle.args = {
    name: 'single-dropdown',
    options: ['Apple', 'Banana', 'Cherry'],
    label: 'Select a Fruit',
};

// Disabled story for SingleDropdown
export const DisabledSingle = SingleTemplate.bind({});
DisabledSingle.args = {
    ...DefaultSingle.args,
    disabled: true,
};
