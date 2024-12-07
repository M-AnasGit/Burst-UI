import { Bento, BentoProps } from '../components/data/Bento';
import { StoryObj, Meta } from '@storybook/react';

type StoryProps = BentoProps;

const meta: Meta = {
    component: Bento,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A component that allows you to create a bento layout with multiple sections.',
            },
        },
    },
    argTypes: {
        children: {
            description: 'The children of the Bento component.',
            table: {
                type: {
                    summary: 'React.ReactNode[]',
                },
            },
        },
        bentoRatios: {
            description: 'The ratios of the sections in the bento layout.',
            table: {
                type: {
                    summary: 'number[]',
                },
            },
        },
        size: {
            description: 'The size of the bento layout.',
            table: {
                type: {
                    summary: 'sizes',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        children: [
            <div>Section 1</div>,
            <div>Section 2</div>,
            <div>Section 3</div>,
            <div>Section 4</div>,
            <div>Section 5</div>,
        ],
        bentoRatios: [1 / 2, 1 / 2, 1, 1 / 2, 1 / 2],
        size: 'small',
    },
};
