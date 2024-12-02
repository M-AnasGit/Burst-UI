import React from 'react';
import styled from 'styled-components';

import { Button } from '../buttons/Button';

import { useTheme } from '../../themeContext';

const StyledModalContainer = styled.div<{ $size: sizes; $minWidth: string }>`
    display: flex;
    flex-direction: column;
    min-width: ${({ $minWidth }) => $minWidth};

    border-radius: ${({ theme, $size }) =>
        theme.components.modals.radius[$size]};
    border: 2px solid ${({ theme }) => theme.colors.border.normal};

    background-color: ${({ theme }) => theme.colors.background.normal};

    overflow: auto;
`;

// prettier-ignore
const StyledTitle = styled.h1<{
    $size: sizes;
}>
`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.components.modals.sizes[$size]};
    font-weight: bold;

    color: ${({ theme }) => theme.colors.textPrimary};

    margin: 0;
`;

const StyledMessage = styled.p<{ $size: sizes }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: normal;

    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;

    padding-bottom: ${({ theme, $size }) =>
        theme.components.modals.padding[$size]};
`;

const CustomContainer = styled.div<{ $type: string; $size: sizes }>`
    display: flex;
    flex-direction: column;

    position: relative;
    padding: ${({ theme, $size }) => theme.components.modals.padding[$size]};
    background-color: ${({ theme, $type }) =>
        theme.components.modals.custom.message[$type].background};

    border-left: 4px solid
        ${({ theme, $type }) =>
            theme.components.modals.custom.message[$type].border};
`;

const CustomTitle = styled.h2<{ $type: string; $size: sizes }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: bold;

    color: ${({ theme, $type }) =>
        theme.components.modals.custom.message[$type].border};

    text-transform: capitalize;

    margin: 0;
`;

const CustomMessage = styled.p<{ $type: string; $size: sizes }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: normal;

    color: ${({ theme, $type }) =>
        theme.components.modals.custom.message[$type].text};
    margin: 0;
`;

/**
 * Modal component for displaying messages with optional custom messages and actions.
 *
 * This component renders a modal dialog with a title, a main message, and optional custom messages.
 * It includes buttons for confirming or canceling actions.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the modal.
 * @param {string} props.message - The main message to be displayed in the modal.
 * @param {Array<{ type: string, title?: string, message: string }>} [props.customMessages] - An array of custom messages to be displayed in the modal. Each message can have a type (e.g., 'info', 'warning') and an optional title.
 * @param {() => void} props.onConfirm - Callback function triggered when the confirm button is clicked.
 * @param {() => void} props.onCancel - Callback function triggered when the cancel button is clicked.
 * @param {string} [props.minWidth='350px'] - Minimum width of the modal.
 * @param {string} [props.cancelText='Cancel'] - Text for the cancel button.
 * @param {string} [props.confirmText='Confirm'] - Text for the confirm button.
 * @param {'small' | 'medium' | 'large'} [props.size='small'] - Size of the modal, affecting padding and font sizes.
 *
 * @returns {JSX.Element} A styled modal dialog with title, message, and action buttons.
 *
 * @example
 * <Modal
 *   title="Confirmation"
 *   message="Are you sure you want to proceed?"
 *   onConfirm={() => console.log('Confirmed!')}
 *   onCancel={() => console.log('Cancelled!')}
 *   customMessages={[
 *       { type: 'info', title: 'Note', message: 'This action cannot be undone.' }
 *   ]}
 * />
 */
export const Modal: React.FC<ModalProps> = ({
    title,
    message,
    customMessages = [],
    onConfirm,
    onCancel,
    minWidth = '350px',
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    size = 'small',
}: ModalProps) => {
    const { theme } = useTheme();

    return (
        <StyledModalContainer $size={size} $minWidth={minWidth} theme={theme}>
            <div
                style={{
                    backgroundColor: theme.colors.background.active,
                    padding: theme.components.modals.padding
                        ? theme.components.modals.padding[size]
                        : '0.5rem',
                    borderBottom: `1px solid ${theme.colors.border.normal}`,
                }}
            >
                <StyledTitle $size={size} theme={theme}>
                    {title}
                </StyledTitle>
            </div>
            <div
                style={{
                    padding: theme.components.modals.padding
                        ? theme.components.modals.padding[size]
                        : '0.5rem',
                }}
            >
                <StyledMessage $size={size} theme={theme}>
                    {message}
                </StyledMessage>
                {customMessages.map((customMessage, index) => (
                    <CustomContainer
                        key={index}
                        $size={size}
                        $type={customMessage.type}
                        theme={theme}
                    >
                        <CustomTitle
                            $size={size}
                            $type={customMessage.type}
                            theme={theme}
                        >
                            {customMessage.title || customMessage.type}
                        </CustomTitle>
                        <CustomMessage
                            $size={size}
                            $type={customMessage.type}
                            theme={theme}
                        >
                            {customMessage.message}
                        </CustomMessage>
                    </CustomContainer>
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: theme.components.modals.padding
                        ? theme.components.modals.padding[size]
                        : '0.5rem',
                    paddingBottom: theme.components.modals.padding
                        ? theme.components.modals.padding[size]
                        : '0.5rem',
                    paddingRight: theme.components.modals.padding
                        ? theme.components.modals.padding[size]
                        : '0.5rem',
                }}
            >
                <Button
                    onClick={onConfirm}
                    variant="primary"
                    size={size}
                    ariaLabel={confirmText}
                >
                    {confirmText}
                </Button>

                <Button
                    onClick={onCancel}
                    variant="text"
                    size={size}
                    ariaLabel={cancelText}
                >
                    {cancelText}
                </Button>
            </div>
        </StyledModalContainer>
    );
};
