import React from 'react';
import { Toggle, ToggleProps } from '../components/form/Toggle';
import { StoryObj, Meta } from '@storybook/react/*';

type StoryProps = Omit<ToggleProps, 'onChange'>;

const meta: Meta = {
    component: Toggle,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A toggle switch component',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'The label of the toggle switch',
        },
        inline: {
            control: 'boolean',
            description: 'Whether the toggle switch is inline',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the toggle switch is disabled',
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'The size of the toggle switch',
        },
    },
    render: (args: any) => {
        const [checked, setChecked] = React.useState<boolean>(
            args?.checked || false,
        );
        const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
            setChecked(e.target.checked);
        };

        return <Toggle {...args} onChange={onChange} checked={checked} />;
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        label: 'Toggle',
        inline: true,
        disabled: false,
        size: 'small',
    },
};

export const notInline: Story = {
    args: {
        label: 'Toggle',
        inline: false,
        disabled: false,
        size: 'small',
    },
};

export const Checked: Story = {
    args: {
        label: 'Toggle',
        inline: true,
        disabled: false,
        size: 'small',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Toggle',
        inline: true,
        disabled: true,
        size: 'small',
    },
};
