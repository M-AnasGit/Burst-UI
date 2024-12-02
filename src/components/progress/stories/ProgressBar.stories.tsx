import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ProgressBar } from '../Bar';

export default {
    title: 'Components/Progress/Bar',
    component: ProgressBar,
    argTypes: {
        start_at: { control: 'number' },
        block_at: { control: 'number' },
        progress_by: { control: 'number' },
        progress_rate: { control: 'number' },
        show_progress: { control: 'boolean' },
        show_labels: { control: 'boolean' },
        finished: { control: 'boolean' },
        color: { control: 'color' },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
    },
} as Meta;

const Template: StoryFn<ProgressProps> = (args: ProgressProps) => (
    <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
    start_at: 0,
    block_at: 100,
    progress_by: 25,
    progress_rate: 1000,
    show_progress: true,
    show_labels: true,
    progress_labels: ['Start', 'Quarter', 'Half', 'Three Quarters', 'Complete'],
    finished: false,
    size: 'medium',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    ...Default.args,
    color: '#ff0000',
};

export const Finished = Template.bind({});
Finished.args = {
    ...Default.args,
    finished: true,
};

export const NoLabels = Template.bind({});
NoLabels.args = {
    ...Default.args,
    show_labels: false,
};

export const FastProgress = Template.bind({});
FastProgress.args = {
    ...Default.args,
    progress_by: 20,
    progress_rate: 500,
};
