import React from 'react';

import { DrawerWrapper } from './styles';

import { useTheme } from '../../themeContext';

export interface DrawerProps {
    isOpen: boolean;
    position: 'left' | 'right';
    children?: React.ReactNode;
    minWidth?: string;
    maxWidth?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
    position,
    children,
    isOpen,
    minWidth = '300px',
    maxWidth = '100%',
}: DrawerProps) => {
    const { theme } = useTheme();

    return (
        <DrawerWrapper
            $position={position}
            $minWidth={minWidth}
            $maxWidth={maxWidth}
            $isOpen={isOpen}
            theme={theme}
        >
            {children}
        </DrawerWrapper>
    );
};
