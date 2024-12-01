import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Checkbox } from '../Checkbox';

export default {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    argTypes: {
        onChange: { action: 'changed' },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        value: { control: 'text' },
        label: { control: 'text' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args: CheckboxProps) => {
    const [checked, setChecked] = React.useState(args.checked);
    return (
        <Checkbox
            {...args}
            checked={checked}
            onChange={(e) => {
                setChecked(e.target.checked);
                args.onChange(e);
            }}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    value: 'default',
    label: 'Default Checkbox',
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

export const Required = Template.bind({});
Required.args = {
    ...Default.args,
    required: true,
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    ...Default.args,
    size: 'large',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    value: 'no-label',
};

export const CheckboxGroup = () => {
    const [checkedItems, setCheckedItems] = React.useState<
        Record<string, boolean>
    >({});
    const handleChange = (event: any) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.value]: event.target.checked,
        });
    };

    return (
        <div>
            <Checkbox
                value="option1"
                label="Option 1"
                onChange={handleChange}
                checked={checkedItems['option1']}
            />
            <Checkbox
                value="option2"
                label="Option 2"
                onChange={handleChange}
                checked={checkedItems['option2']}
            />
            <Checkbox
                value="option3"
                label="Option 3"
                onChange={handleChange}
                checked={checkedItems['option3']}
            />
        </div>
    );
};
