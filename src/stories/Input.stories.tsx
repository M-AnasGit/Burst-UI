import React from 'react';

import { Input, InputProps } from '../components/form/Input';
import { StoryObj, Meta } from '@storybook/react/*';

type StoryProps = Omit<InputProps, 'value' | 'onChange'>;

const meta: Meta = {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'An Input component with support for various sizes, types, and validation options.',
            },
        },
    },
    argTypes: {
        name: {
            description: 'The name attribute of the input element.',
            control: 'text',
        },
        placeholder: {
            description: 'Placeholder text for the input.',
            control: 'text',
        },
        value: {
            description: 'The controlled value of the input.',
            control: 'text',
        },
        size: {
            description:
                'The size of the input. One of "small", "medium", or "large".',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
        label: {
            description: 'Optional label for the input.',
            control: 'text',
        },
        options: {
            description:
                'Additional configuration options like password, pattern matching, etc.',
            control: 'object',
        },
    },
    render: (args: any) => {
        const [value, setValue] = React.useState(args.value);
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value);

        return <Input {...args} value={value} onChange={onChange} />;
    },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        name: 'default',
        placeholder: 'Input',
        size: 'small',
        label: 'Input',
    },
};

export const Labeless: Story = {
    args: {
        name: 'labelless',
        placeholder: 'Input',
        size: 'small',
    },
};

export const NumberInput: Story = {
    args: {
        name: 'number',
        placeholder: 'Number',
        size: 'small',
        label: 'Number',
        options: { type: 'number' },
    },
};

export const Password: Story = {
    args: {
        name: 'password',
        placeholder: 'Password',
        size: 'small',
        label: 'Password',
        options: { password: true },
    },
};

export const Email: Story = {
    args: {
        name: 'email',
        placeholder: 'Email',
        size: 'small',
        label: 'Email',
        options: {
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
            },
            displayError: true,
        },
    },
};

export const Match: Story = {
    args: {
        name: 'match',
        placeholder: 'Password',
        size: 'small',
        label: 'Value to match (password)',
        options: {
            password: true,
            match: {
                value: 'password',
                message: 'Passwords do not match',
            },
        },
    },
};

export const Required: Story = {
    args: {
        name: 'required',
        placeholder: 'Input',
        size: 'small',
        label: 'Required input',
        options: {
            required: 'This field is required',
        },
    },
};

export const Disabled: Story = {
    args: {
        name: 'disabled',
        placeholder: 'Input',
        size: 'small',
        label: 'Disabled input',
        options: { disabled: true },
    },
};

export const ReadOnly: Story = {
    args: {
        name: 'readonly',
        placeholder: 'Input',
        size: 'small',
        label: 'Read-only input',
        options: { readOnly: true },
    },
};

export const min_max_Length: Story = {
    args: {
        name: 'min_max',
        placeholder: 'Input',
        size: 'small',
        label: 'Min length 3, Max length 10',
        options: {
            minLength: { value: 3, message: 'Too short' },
            maxLength: { value: 10, message: 'Too long' },
        },
    },
};
