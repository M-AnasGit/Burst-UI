import React from 'react';

import { Overlay } from './styles';
import { useTheme } from '../../themeContext';

export interface ModalContainerProps {
    isOpen: boolean;
    ActiveModal: React.ReactNode;
    children?: React.ReactNode;
    overlayType?: 'darken' | 'blur' | 'none';
    overlayRoughness?: 'low' | 'medium' | 'high';
    onOverlayClick?: () => any;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
    isOpen,
    children,
    ActiveModal,
    overlayType = 'darken',
    overlayRoughness = 'medium',
    onOverlayClick = () => {},
}: ModalContainerProps) => {
    const { theme } = useTheme();

    return (
        <Overlay
            $isOpen={isOpen}
            $overlayType={overlayType}
            $overlayRoughness={overlayRoughness}
            theme={theme}
            onClick={onOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            {ActiveModal}
            {children}
        </Overlay>
    );
};
