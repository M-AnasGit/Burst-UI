import React from 'react';
import { Checkbox, CheckboxProps } from '../components/form/Checkbox';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = Omit<CheckboxProps, 'onChange'>;

const meta: Meta = {
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Checkbox component',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Checkbox label',
        },
        value: {
            control: 'text',
            description: 'Checkbox value',
        },
        disabled: {
            control: 'boolean',
            description: 'Checkbox disabled state',
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'Checkbox size',
        },
        required: {
            control: 'text',
            description: 'Checkbox required state',
        },
    },
    render: (args: any) => {
        const [checked, setChecked] = React.useState<boolean>(
            args?.checked || false,
        );
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(e.target.checked);
        };

        return <Checkbox {...args} onChange={onChange} checked={checked} />;
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        label: 'Default',
        value: 'Default checkbox',
        checked: false,
        size: 'small',
    },
};

export const Labeless: Story = {
    args: {
        value: 'Labelless checkbox',
        checked: false,
        size: 'small',
    },
};

export const Checked: Story = {
    args: {
        label: 'Checked',
        value: 'Checked checkbox',
        checked: true,
        size: 'small',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        value: 'Disabled checkbox',
        checked: false,
        disabled: true,
        size: 'small',
    },
};

export const Required: Story = {
    args: {
        label: 'Required',
        value: 'Required checkbox',
        checked: false,
        required: true,
        size: 'small',
    },
};
