import React from 'react';
import { Textarea, TextareaProps } from '../components/form/TextArea';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = Omit<TextareaProps, 'value' | 'onChange'>;

const meta: Meta = {
    component: Textarea,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A TextArea component with support for various sizes, types, and validation options.',
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
        minRows: {
            description: 'The minimum number of rows to display.',
            control: 'number',
        },
    },
    render: (args: any) => {
        const [value, setValue] = React.useState(args.value);
        const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setValue(e.target.value);

        return <Textarea {...args} value={value} onChange={onChange} />;
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        name: 'default',
        label: 'Default Field',
        placeholder: 'Enter some text here...',
        minRows: 3,
    },
};

export const Labeless: Story = {
    args: {
        name: 'labelless',
        placeholder: 'Enter some text here...',
        minRows: 3,
    },
};

export const Disabled: Story = {
    args: {
        name: 'disabled',
        label: 'Disabled Field',
        placeholder: 'Enter some text here...',
        minRows: 3,
        options: { disabled: true },
    },
};

export const ReadOnly: Story = {
    args: {
        name: 'readonly',
        label: 'Read Only Field',
        placeholder: 'Enter some text here...',
        minRows: 3,
        options: { readOnly: true },
    },
};

export const Required: Story = {
    args: {
        name: 'required',
        placeholder: 'Enter some text here...',
        label: 'Required Field',
        minRows: 3,
        options: { required: 'This area is required' },
    },
};

export const min_max_Length: Story = {
    args: {
        name: 'min_max_length',
        label: 'Min length: 5, Max length: 10',
        placeholder: 'Enter some text here...',
        minRows: 3,
        options: {
            minLength: { value: 5, message: 'Input too short' },
            maxLength: { value: 10, message: 'Input too long' },
        },
    },
};
