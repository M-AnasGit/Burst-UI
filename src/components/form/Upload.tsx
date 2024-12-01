import React from 'react';
import styled from 'styled-components';

import { Button } from '../buttons/Button';
import Label from '../utils/Label';

import { useTheme } from '../../themeContext';

const getSize = (size: number): string => {
    const units = ['KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (size > 1024 && i < units.length) {
        size /= 1024;
        i++;
    }
    return i === 0 ? `1 KB` : `${Math.floor(size)} ${units[i - 1]}`;
};

const getDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};

const StyledLabel = styled(Label)<{ $size: string; $disabled: boolean }>`
    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'};
`;

const HiddenUpload = styled.input`
    display: none;
    z-index: 1;
    cursor: pointer;
`;

const UploadContainer = styled.div<{ $size: sizes; $disabled: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : theme.colors.background.normal};
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textSecondary};

    border: 2px solid ${({ theme }) => theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.uploads.radius[$size]};

    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;

const NothingUploaded = styled(UploadContainer)`
    flex: 1;

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
`;

const FileDetails = styled.p<{ $size: sizes; $disabled: boolean }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};

    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textSecondary};

    padding: 0 ${({ theme }) => theme.spacing.small};
`;

/**
 * Upload component for file input.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onChange - Function to handle file input changes.
 * @param {string} [props.label] - Label for the upload component.
 * @param {File[]} [props.files=[]] - Array of uploaded File objects.
 * @param {boolean} [props.showFiles=true] - Whether to display uploaded files.
 * @param {string} [props.noUploadedText='No files uploaded'] - Text to show when no files are uploaded.
 * @param {string} [props.uploadText='Upload a file'] - Text for the upload button.
 * @param {boolean} [props.disabled=false] - Whether the upload is disabled.
 * @param {boolean} [props.required=false] - Whether the upload is required.
 * @param {string} [props.types='*'] - Accepted file types.
 * @param {boolean} [props.multiple=false] - Whether multiple file upload is allowed.
 * @param {('small'|'medium'|'large')} [props.size='small'] - Size of the upload component.
 * @returns {JSX.Element} An upload component with file list display.
 *
 * @example
 * const [files, setFiles] = React.useState<File[]>([]);
 * const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *   if (e.target.files) {
 *     setFiles(Array.from(e.target.files));
 *   }
 * };
 *
 * <Upload
 *   onChange={handleFileChange}
 *   label="Upload Documents"
 *   files={files}
 *   multiple={true}
 *   types=".pdf,.doc,.docx"
 *   size="medium"
 *   required={true}
 * />
 */
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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {label && (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <StyledLabel
                        $size={size}
                        $disabled={disabled}
                        theme={theme}
                    >
                        {label}
                    </StyledLabel>
                    {required && (
                        <span
                            style={{ color: theme.colors.error, marginLeft: 4 }}
                        >
                            *
                        </span>
                    )}
                </div>
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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        flexWrap: 'wrap',
                        gap: theme.spacing[size],
                    }}
                >
                    <div
                        style={{
                            flexShrink: 0,
                        }}
                    >
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
                    </div>

                    {showFiles &&
                        (files.length > 0 ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: theme.spacing[size],
                                }}
                            >
                                {files.map((file, i) => (
                                    <UploadContainer
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
                                    </UploadContainer>
                                ))}
                            </div>
                        ) : (
                            <NothingUploaded
                                $size={size}
                                $disabled={disabled}
                                theme={theme}
                            >
                                {noUploadedText}
                            </NothingUploaded>
                        ))}
                </div>
            </div>
        </div>
    );
};
