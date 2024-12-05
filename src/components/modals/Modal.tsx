import React from 'react';

import { Button } from '../buttons/Button';
import {
    CustomWrapper,
    CustomMessage,
    CustomTitle,
    StyledMessage,
    ModalWrapper,
    StyledTitle,
    TitleWrapper,
    MessageWrapper,
    ButtonWrapper,
} from './styles';
import { useTheme } from '../../themeContext';

export interface ModalProps {
    title: string;
    message: string;
    minWidth?: string;
    customMessages?: CustomMessage[];
    onConfirm: () => any;
    onCancel: () => any;
    cancelText?: string;
    confirmText?: string;
    size?: sizes;
}

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
        <ModalWrapper $size={size} $minWidth={minWidth} theme={theme}>
            <TitleWrapper $size={size} theme={theme}>
                <StyledTitle $size={size} theme={theme}>
                    {title}
                </StyledTitle>
            </TitleWrapper>
            <MessageWrapper $size={size} theme={theme}>
                <StyledMessage $size={size} theme={theme}>
                    {message}
                </StyledMessage>
                {customMessages.map((customMessage, index) => (
                    <CustomWrapper
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
                    </CustomWrapper>
                ))}
            </MessageWrapper>
            <ButtonWrapper $size={size} theme={theme}>
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
            </ButtonWrapper>
        </ModalWrapper>
    );
};
