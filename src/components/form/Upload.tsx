import React from 'react';

import {
    FlexColumnWrapper,
    FlexItemsCenterWrapper,
    LabelWithDisable,
    Required,
    HiddenUpload,
    NoShrinkWrapper,
    UploadContainer,
    FileDetails,
    NothingUploaded,
    UploadWrapper,
} from './styles';
import { Button } from '../buttons/Button';
import { useTheme } from '../../themeContext';

export interface UploadProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    uploadText?: string;
    noUploadedText?: string;
    label?: string;
    files?: File[];
    showFiles?: boolean;
    size?: sizes;
    disabled?: boolean;
    required?: boolean;
    types?: string;
    multiple?: boolean;
}

const getSize = (size: number): string => {
    const units = ['KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (size > 1024 && i < units.length) {
        size /= 1024;
        i++;
    }
    return i === 0 ? `1 KB` : `${Math.floor(size)} ${units[i - 1]}`;
};

export const Upload: React.FC<UploadProps> = ({
    onChange,
    label,
    files = [],
    showFiles = true,
    noUploadedText = 'No files uploaded',
    uploadText = 'Upload a file',
    disabled = false,
    required = false,
    types = '*',
    multiple = false,
    size = 'small',
}: UploadProps) => {
    const uploadRef = React.useRef<HTMLInputElement>(null);
    const { theme } = useTheme();
    const handleUploadClick = React.useCallback((): void => {
        if (uploadRef.current && !disabled) {
            uploadRef.current.click();
        }
    }, [uploadRef, disabled]);

    return (
        <FlexColumnWrapper>
            {label && (
                <FlexItemsCenterWrapper>
                    <LabelWithDisable
                        $size={size}
                        $disabled={disabled}
                        theme={theme}
                    >
                        {label}
                    </LabelWithDisable>
                    {required && <Required theme={theme}>*</Required>}
                </FlexItemsCenterWrapper>
            )}
            <div>
                <HiddenUpload
                    ref={uploadRef}
                    type={'file'}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    accept={types}
                    multiple={multiple}
                    theme={theme}
                />
                <div>
                    <NoShrinkWrapper $size={size} theme={theme}>
                        <Button
                            onClick={handleUploadClick}
                            size={size}
                            disabled={disabled}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    fontSize: theme.typography.fontSize[size],
                                    fontWeight: 'bold',

                                    width: theme?.components?.uploads?.sizes
                                        ? theme?.components?.uploads?.sizes[
                                              size
                                          ]
                                        : '24px',
                                    height: theme?.components?.uploads?.sizes
                                        ? theme?.components?.uploads?.sizes[
                                              size
                                          ]
                                        : '24px',

                                    color: disabled
                                        ? theme.colors.textDisabled
                                        : theme.colors.textSecondary,
                                    backgroundColor:
                                        theme.colors.background.active,
                                    borderRadius: '50%',

                                    marginRight: theme.spacing[size],
                                }}
                            >
                                +
                            </div>
                            {uploadText}
                        </Button>
                    </NoShrinkWrapper>

                    {showFiles &&
                        (files.length > 0 ? (
                            <UploadContainer $size={size} theme={theme}>
                                {files.map((file, i) => (
                                    <UploadWrapper
                                        key={i}
                                        $size={size}
                                        $disabled={disabled}
                                        theme={theme}
                                    >
                                        <FileDetails
                                            $size={size}
                                            $disabled={disabled}
                                            theme={theme}
                                        >
                                            {file.name} - {getSize(file.size)}
                                        </FileDetails>
                                    </UploadWrapper>
                                ))}
                            </UploadContainer>
                        ) : (
                            <NothingUploaded
                                $size={size}
                                $disabled={disabled}
                                theme={theme}
                            >
                                <FileDetails
                                    $size={size}
                                    $disabled={disabled}
                                    theme={theme}
                                >
                                    {noUploadedText}
                                </FileDetails>
                            </NothingUploaded>
                        ))}
                </div>
            </div>
        </FlexColumnWrapper>
    );
};
