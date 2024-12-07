import { Table, TableProps } from '../components/data/Table';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = TableProps;

const meta: Meta = {
    component: Table,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Table component',
            },
        },
    },
    argTypes: {
        headers: {
            description: 'Table headers',
            control: {
                type: 'object',
            },
        },
        data: {
            description: 'Table data',
            control: {
                type: 'object',
            },
        },
        totalRow: {
            description: 'Total row',
            control: {
                type: 'boolean',
            },
        },
        style: {
            description: 'Table style',
            options: ['normal', 'striped'],
            control: {
                type: 'select',
            },
        },
        size: {
            description: 'Table size',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio',
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        headers: [
            'Name',
            { key: 'Age', sortable: true },
            { key: 'Gender', sortable: true },
            'Country',
        ],
        data: [
            ['John', '25', 'Male', 'USA'],
            ['Jane', '22', 'Female', 'UK'],
        ],
    },
};

export const TotalRow: Story = {
    args: {
        headers: [
            'Name',
            { key: 'Gender', sortable: true },
            'Country',
            { key: 'Age', sortable: true },
        ],
        data: [
            ['John', 'Male', 'USA', '25'],
            ['Jane', 'Female', 'UK', '22'],
        ],
        totalRow: true,
    },
};

export const Striped: Story = {
    args: {
        headers: [
            'Name',
            { key: 'Gender', sortable: true },
            'Country',
            { key: 'Age', sortable: true },
        ],
        data: [
            ['John', 'Male', 'USA', '25'],
            ['Jane', 'Female', 'UK', '22'],
        ],
        style: 'striped',
    },
};
