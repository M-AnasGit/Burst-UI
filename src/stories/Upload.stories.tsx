import React from 'react';
import { Upload, UploadProps } from '../components/form/Upload';
import { StoryObj, Meta } from '@storybook/react';

type StoryProps = Omit<UploadProps, 'onChange'>;

const meta: Meta = {
    component: Upload,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A file upload component',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'The label for the upload component',
        },
        uploadText: {
            control: 'text',
            description: 'The text for the upload button',
        },
        noUploadedText: {
            control: 'text',
            description: 'The text to display when no files are uploaded',
        },
        showFiles: {
            control: 'boolean',
            description: 'Whether to show the uploaded files',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the upload component is disabled',
        },
        required: {
            control: 'boolean',
            description: 'Whether the upload component is required',
        },
        types: {
            control: 'text',
            description: 'The file types to accept',
        },
        multiple: {
            control: 'boolean',
            description: 'Whether to allow multiple files to be uploaded',
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio',
            },
            description: 'The size of the upload component',
        },
    },
    render: (args: any) => {
        const [files, setFiles] = React.useState<File[]>([]);
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                setFiles((prev) => {
                    let newFiles: File[] = [];
                    let files = e?.target?.files
                        ? Array.from(e.target.files)
                        : null;
                    if (files) {
                        newFiles = files.map((file) => {
                            return file;
                        });
                    }
                    return [...prev, ...newFiles];
                });
            }
        };

        return <Upload {...args} onChange={onChange} files={files} />;
    },
};

export default meta;

type Story = StoryObj<UploadProps>;

export const Default: Story = {
    args: {
        label: 'Upload a file',
        uploadText: 'Upload',
        noUploadedText: 'No files uploaded',
        showFiles: true,
        disabled: false,
        required: false,
        types: '*',
        multiple: false,
        size: 'small',
    },
};

export const SpeficiTypes: Story = {
    args: {
        label: 'Upload a file',
        uploadText: 'Upload',
        noUploadedText: 'No files uploaded',
        showFiles: true,
        disabled: false,
        required: false,
        types: 'image/*',
        multiple: false,
        size: 'small',
    },
};

export const MultipleFiles: Story = {
    args: {
        label: 'Upload a file',
        uploadText: 'Upload',
        noUploadedText: 'No files uploaded',
        showFiles: true,
        disabled: false,
        required: false,
        types: '*',
        multiple: true,
        size: 'small',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Upload a file',
        uploadText: 'Upload',
        noUploadedText: 'No files uploaded',
        showFiles: true,
        disabled: true,
        required: false,
        types: '*',
        multiple: false,
        size: 'small',
    },
};

export const Required: Story = {
    args: {
        label: 'Upload a file',
        uploadText: 'Upload',
        noUploadedText: 'No files uploaded',
        showFiles: true,
        disabled: false,
        required: true,
        types: '*',
        multiple: false,
        size: 'small',
    },
};
