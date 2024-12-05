import React from 'react';
import { Dropdown, DropdownProps } from '../components/form/Dropdown';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = Omit<DropdownProps, 'onChange'>;

const meta: Meta = {
    component: Dropdown,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Dropdown component',
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Name of the dropdown',
        },
        options: {
            control: 'object',
            description: 'Array of options',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        NoOptionsMessage: {
            control: 'text',
            description: 'Message to display when no options are available',
        },
        defaultValue: {
            control: 'number',
            description: 'Default value',
        },
        label: {
            control: 'text',
            description: 'Label for the dropdown',
        },
        ariaLabel: {
            control: 'text',
            description: 'Aria label for the dropdown',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the dropdown',
        },
        required: {
            control: 'boolean',
            description: 'Make the dropdown required',
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'Size of the dropdown',
        },
    },
    render: (args: any) => {
        const [value, setValue] = React.useState<string | null>(null);
        const onChange = (selected: string) => {
            setValue(selected);
        };

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '20vh',
                    margin: '0',
                }}
            >
                <Dropdown {...args} value={value} onChange={onChange} />;
            </div>
        );
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        name: 'dropdown',
        options: ['Option 1', 'Option 2', 'Option 3'],
    },
};
