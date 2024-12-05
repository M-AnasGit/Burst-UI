import React from 'react';
import { RadioGroup, RadioGroupProps } from '../components/form/Radio';
import { StoryObj, Meta } from '@storybook/react/*';

type StoryProps = Omit<RadioGroupProps, 'selected' | 'onChange'>;

const meta: Meta = {
    component: RadioGroup,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'The name of the radio group',
        },
        options: {
            control: 'object',
            description: 'The options to display',
        },
        label: {
            control: 'text',
            description: 'The label of the radio group',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the radio group is disabled',
        },
        direction: {
            control: 'radio',
            options: ['row', 'column'],
            description: 'The direction of the radio group',
        },
        defaultValue: {
            control: 'number',
            description: 'The default selected value',
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'The size of the radio group',
        },
    },
    render: (args: any) => {
        const [selected, setSelected] = React.useState<number>(0);
        const options = [
            { label: 'Option 1', disabled: false },
            { label: 'Option 2', disabled: false },
            { label: 'Option 3', disabled: false },
        ];
        const onChange = (index: number): void => {
            setSelected(index);
        };

        return (
            <RadioGroup
                {...args}
                selected={selected}
                options={options}
                onChange={onChange}
            />
        );
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        name: 'default-radio-group',
        label: 'Radio Group',
    },
};

export const Column: Story = {
    args: {
        name: 'column-radio-group',
        label: 'Radio Group',
        direction: 'column',
    },
};

export const Labeless: Story = {
    args: {
        name: 'labeless-radio-group',
    },
};

export const Disabled: Story = {
    args: {
        name: 'disabled-radio-group',
        label: 'Radio Group',
        disabled: true,
    },
};
