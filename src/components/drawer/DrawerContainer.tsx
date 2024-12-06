import React from 'react';

import { Overlay } from './styles';

import { useTheme } from '../../themeContext';

export interface DrawerContainerProps {
    isOpen: boolean;
    ActiveDrawer: React.ReactNode;
    children?: React.ReactNode;
    overlayType?: 'darken' | 'blur' | 'none';
    overlayRoughness?: 'low' | 'medium' | 'high';
    onOverlayClick?: () => any;
}

export const DrawerContainer: React.FC<DrawerContainerProps> = ({
    isOpen,
    children,
    ActiveDrawer,
    overlayType = 'darken',
    overlayRoughness = 'medium',
    onOverlayClick = () => {},
}: DrawerContainerProps) => {
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
            {React.cloneElement(ActiveDrawer as React.ReactElement, { isOpen })}
            {children}
        </Overlay>
    );
};
