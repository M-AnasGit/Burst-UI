import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`

export const DrawerWrapper = styled.div<{ 
    $position: 'left' | 'right'; 
    $minWidth: string; 
    $maxWidth: string; 
    $isOpen: boolean;  
}>
`
    position: fixed;
    top: 0;
    bottom: 0;
    ${({ $position }) => $position === 'left' ? 'left: 0;' : 'right: 0;'}
    z-index: 10000;

    width: ${({ $minWidth }) => $minWidth};
    max-width: ${({ $maxWidth }) => $maxWidth};
    background-color: ${({ theme }) => theme.colors.background.normal};
    
    box-shadow: ${({ theme }) => theme.theme === 'dark' ? theme.components.drawer.darkshadow : theme.components.drawers.lightshadow};

    padding: ${({ theme }) => theme.spacing.medium};
    
    animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
    transform: ${({ $isOpen, $position }) => ($isOpen ? 'translateX(0)' : $position === 'left' ? 'translateX(-100%)' : 'translateX(100%)')};
`

export const Overlay = styled.div<{
    $isOpen: boolean;
    $overlayType: 'darken' | 'blur' | 'none';
    $overlayRoughness: string;
    theme: any;
}>
`
    position: fixed;
    height: 100vh;
    width: 100vw;
    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;

    background-color: ${({ theme, $overlayType, $overlayRoughness }) =>
        $overlayType === 'darken'
            ? theme.components.modals.custom.darken[$overlayRoughness]
            : 'transparent'};
    backdrop-filter: ${({ theme, $overlayType, $overlayRoughness }) =>
        $overlayType === 'blur'
            ? theme.components.modals.custom.blur[$overlayRoughness]
            : 'none'};
`;