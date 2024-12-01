import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Input, TextArea } from '../InputField';

export default {
    title: 'Components/Form/Input Fields',
    component: Input,
    argTypes: {
        onChange: { action: 'changed' },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        name: { control: 'text' },
        placeholder: { control: 'text' },
        value: { control: 'text' },
        label: { control: 'text' },
        ariaLabel: { control: 'text' },
        options: {
            control: 'object',
            description:
                'Options for input, including maxLength, minLength, pattern, etc.',
        },
    },
} as Meta;

// Input Stories
const InputTemplate: StoryFn<InputProps> = (args: InputProps) => {
    const [value, setValue] = React.useState(args.value);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return <Input {...args} value={value} onChange={onChange} />;
};

export const DefaultInput = InputTemplate.bind({});
DefaultInput.args = {
    name: 'default-input',
    placeholder: 'Enter text',
    value: '',
    label: 'Default Input',
};

export const PasswordInput = InputTemplate.bind({});
PasswordInput.args = {
    ...DefaultInput.args,
    name: 'password-input',
    placeholder: 'Enter password',
    label: 'Password Input',
    options: { password: true },
};

export const RequiredInput = InputTemplate.bind({});
RequiredInput.args = {
    ...DefaultInput.args,
    name: 'required-input',
    label: 'Required Input',
    options: { required: 'This field is required' },
};

export const PatternInput = InputTemplate.bind({});
PatternInput.args = {
    ...DefaultInput.args,
    name: 'pattern-input',
    label: 'Email Input',
    placeholder: 'Enter email',
    options: {
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
        },
    },
};

export const DisabledInput = InputTemplate.bind({});
DisabledInput.args = {
    ...DefaultInput.args,
    name: 'disabled-input',
    label: 'Disabled Input',
    options: { disabled: true },
};

// TextArea Stories
const TextAreaTemplate: StoryFn<TextAreaProps> = (args: TextAreaProps) => {
    const [value, setValue] = React.useState(args.value);
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return <TextArea {...args} value={value} onChange={onChange} />;
};

export const DefaultTextArea = TextAreaTemplate.bind({});
DefaultTextArea.args = {
    name: 'default-textarea',
    placeholder: 'Enter long text',
    value: '',
    label: 'Default TextArea',
    minRows: 3,
};

export const LargeTextArea = TextAreaTemplate.bind({});
LargeTextArea.args = {
    ...DefaultTextArea.args,
    name: 'large-textarea',
    label: 'Large TextArea',
    size: 'large',
    minRows: 5,
};

export const MaxLengthTextArea = TextAreaTemplate.bind({});
MaxLengthTextArea.args = {
    ...DefaultTextArea.args,
    name: 'maxlength-textarea',
    label: 'Max Length TextArea',
    options: {
        maxLength: {
            value: 100,
            message: 'Maximum 100 characters allowed',
        },
    },
};

export const RequiredTextArea = TextAreaTemplate.bind({});
RequiredTextArea.args = {
    ...DefaultTextArea.args,
    name: 'required-textarea',
    label: 'Required TextArea',
    options: { required: 'This field is required' },
};
