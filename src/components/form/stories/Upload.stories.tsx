import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Upload } from '../Upload';

export default {
    title: 'Components/Form/Upload',
    component: Upload,
    argTypes: {
        onChange: { action: 'files changed' },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        uploadText: { control: 'text' },
        noUploadedText: { control: 'text' },
        label: { control: 'text' },
        files: { control: 'object' },
        showFiles: { control: 'boolean' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        types: { control: 'text' },
        multiple: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<UploadProps> = (args: UploadProps) => {
    const [files, setFiles] = React.useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
        }
    };

    return <Upload {...args} files={files} onChange={handleFileChange} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Upload Files',
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
    ...Default.args,
    multiple: true,
};

export const DisabledUpload = Template.bind({});
DisabledUpload.args = {
    ...Default.args,
    disabled: true,
};

export const RequiredUpload = Template.bind({});
RequiredUpload.args = {
    ...Default.args,
    required: true,
};

export const CustomTexts = Template.bind({});
CustomTexts.args = {
    ...Default.args,
    uploadText: 'Choose Files',
    noUploadedText: 'No documents uploaded yet',
};

export const SpecificFileTypes = Template.bind({});
SpecificFileTypes.args = {
    ...Default.args,
    types: '.pdf,.doc,.docx',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    ...Default.args,
    size: 'large',
};
