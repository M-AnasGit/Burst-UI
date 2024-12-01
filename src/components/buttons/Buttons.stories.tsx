import { StoryFn, Meta } from '@storybook/react';
import { Button } from './Button';
import { ActionButton } from './ActionButton';

export default {
    title: 'Components/Buttons',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        children: { control: 'text' },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        variant: {
            options: ['primary', 'outline', 'text'],
            control: {
                type: 'select',
            },
        },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        notifyText: { control: 'text' },
        ariaLabel: { control: 'text' },
        active: { control: 'boolean' },
    },
} as Meta;

// Regular Button Stories
const ButtonTemplate: StoryFn<ButtonProps> = (args: ButtonProps) => (
    <Button {...args} />
);

export const Default = ButtonTemplate.bind({});
Default.args = {
    children: 'Button',
    onClick: () => console.log('Button clicked'),
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
    ...Default.args,
    variant: 'primary',
};

export const Outline = ButtonTemplate.bind({});
Outline.args = {
    ...Default.args,
    variant: 'outline',
};

export const Text = ButtonTemplate.bind({});
Text.args = {
    ...Default.args,
    variant: 'text',
};

export const Small = ButtonTemplate.bind({});
Small.args = {
    ...Default.args,
    size: 'small',
};

export const Medium = ButtonTemplate.bind({});
Medium.args = {
    ...Default.args,
    size: 'medium',
};

export const Large = ButtonTemplate.bind({});
Large.args = {
    ...Default.args,
    size: 'large',
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

export const Loading = ButtonTemplate.bind({});
Loading.args = {
    ...Default.args,
    loading: true,
};

export const WithNotification = ButtonTemplate.bind({});
WithNotification.args = {
    ...Default.args,
    notifyText: 'Action completed!',
};

// Action Button Stories
const ActionButtonTemplate: StoryFn<ActionButtonProps> = (
    args: ActionButtonProps,
) => <ActionButton {...args} />;

export const DefaultAction = ActionButtonTemplate.bind({});
DefaultAction.args = {
    children: '+',
    onClick: () => console.log('Action button clicked'),
    ariaLabel: 'Add item',
};

export const CustomSizeAction = ActionButtonTemplate.bind({});
CustomSizeAction.args = {
    ...DefaultAction.args,
    width: 60,
    height: 60,
};

export const ActiveAction = ActionButtonTemplate.bind({});
ActiveAction.args = {
    ...DefaultAction.args,
    active: true,
};

export const DisabledAction = ActionButtonTemplate.bind({});
DisabledAction.args = {
    ...DefaultAction.args,
    disabled: true,
};

export const LoadingAction = ActionButtonTemplate.bind({});
LoadingAction.args = {
    ...DefaultAction.args,
    loading: true,
};

// Button Group StoryObj
export const ButtonGroup = () => (
    <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="primary" onClick={() => alert('Clicked')}>
            Primary
        </Button>
        <Button variant="outline" onClick={() => alert('Clicked')}>
            Outline
        </Button>
        <Button variant="text" onClick={() => alert('Clicked')}>
            Text
        </Button>
    </div>
);

// Action Button Group StoryObj
export const ActionButtonGroup = () => (
    <div style={{ display: 'flex', gap: '10px' }}>
        <ActionButton ariaLabel="Add" onClick={() => alert('Clicked')}>
            +
        </ActionButton>
        <ActionButton ariaLabel="Edit" onClick={() => alert('Clicked')}>
            ✎
        </ActionButton>
        <ActionButton ariaLabel="Delete" onClick={() => alert('Clicked')}>
            🗑
        </ActionButton>
    </div>
);
