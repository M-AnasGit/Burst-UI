import React from 'react';
import { Slider, SliderProps } from '../components/form/Slider';
import { StoryObj, Meta } from '@storybook/react/*';

type StoryProps = Omit<SliderProps, 'value' | 'onChange'>;

const meta: Meta = {
    component: Slider,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A slider input component',
            },
        },
    },
    argTypes: {
        name: {
            description: 'The name of the slider',
            control: 'text',
        },
        min: {
            description: 'The minimum value of the slider',
            control: 'number',
        },
        max: {
            description: 'The maximum value of the slider',
            control: 'number',
        },
        label: {
            description: 'The label of the slider',
            control: 'text',
        },
        ariaLabel: {
            description: 'The aria label of the slider',
            control: 'text',
        },
        disabled: {
            description: 'Whether the slider is disabled',
            control: 'boolean',
        },
        readOnly: {
            description: 'Whether the slider is read only',
            control: 'boolean',
        },
        size: {
            description: 'The size of the slider',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
    render: (args: any) => {
        const [value, setValue] = React.useState<number>(args.value);
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(parseInt(e.target.value));
        };

        return <Slider {...args} value={value} onChange={onChange} />;
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        name: 'slider',
        min: 0,
        max: 100,
        label: 'Slider',
        ariaLabel: 'Slider',
        disabled: false,
        readOnly: false,
        size: 'small',
    },
};

export const Labeless: Story = {
    args: {
        name: 'slider',
        min: 0,
        max: 100,
        label: '',
        ariaLabel: 'Slider',
        disabled: false,
        readOnly: false,
        size: 'small',
    },
};

export const Disabled: Story = {
    args: {
        name: 'slider',
        min: 0,
        max: 100,
        label: 'Slider',
        ariaLabel: 'Slider',
        disabled: true,
        readOnly: false,
        size: 'small',
    },
};

export const ReadOnly: Story = {
    args: {
        name: 'slider',
        min: 0,
        max: 100,
        label: 'Slider with read only input (Only bar works)',
        ariaLabel: 'Slider',
        disabled: false,
        readOnly: true,
        size: 'small',
    },
};
