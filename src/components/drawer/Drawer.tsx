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

    const [display, setDisplay] = React.useState<'block' | 'none'>('block');
    const handleAnimationEnd = React.useCallback(
        (event: React.AnimationEvent) => {
            if (
                event.animationName === 'slideOutLeft' ||
                event.animationName === 'slideOutRight'
            ) {
                setDisplay('none');
            }
        },
        [position],
    );

    React.useEffect(() => {
        if (isOpen) {
            setDisplay('block');
        }
    }, [isOpen]);

    return (
        <DrawerWrapper
            $position={position}
            $minWidth={minWidth}
            $maxWidth={maxWidth}
            $isOpen={isOpen}
            $display={display}
            onAnimationEnd={handleAnimationEnd}
            theme={theme}
        >
            {children}
        </DrawerWrapper>
    );
};
