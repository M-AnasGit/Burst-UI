import React from 'react';
import styled from 'styled-components';

import { useTheme } from '../../themeContext';

// prettier-ignore
const Overlay = styled.div<{
    $isOpen: boolean;
    $overlayType: 'darken' | 'blur' | 'none';
    $overlayRoughness: string;
    theme: any;
}>
`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;

    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, $overlayType, $overlayRoughness }) =>
        $overlayType === 'darken'
            ? theme.components.modals.custom.darken[$overlayRoughness]
            : 'transparent'};
    backdrop-filter: ${({ theme, $overlayType, $overlayRoughness }) =>
        $overlayType === 'blur'
            ? theme.components.modals.custom.blur[$overlayRoughness]
            : 'none'};
`;

/**
 * ModalContainer component for displaying modals with an overlay.
 *
 * This component manages the visibility of a modal and provides an overlay
 * that can be clicked to close the modal. It accepts a modal component as a prop
 * and renders it alongside any additional children.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines if the modal is currently open.
 * @param {React.ReactNode} props.ActiveModal - The modal component to be displayed.
 * @param {React.ReactNode} [props.children] - Optional additional content to be rendered inside the modal.
 * @param {'darken' | 'blur' | 'none'} [props.overlayType='darken'] - The type of overlay effect to apply.
 * @param {'low' | 'medium' | 'high'} [props.overlayRoughness='medium'] - The intensity of the overlay effect.
 * @param {() => any} [props.onOverlayClick] - Callback function triggered when the overlay is clicked.
 *
 * @returns {JSX.Element} A modal container with an overlay and the specified modal content.
 *
 * @example
 * <ModalContainer
 *   isOpen={true}
 *   ActiveModal={<Modal title="Information" type="info" message="Info modal!" />}
 *   overlayType="darken"
 *   overlayRoughness="medium"
 *   onOverlayClick={() => console.log('Overlay clicked')}
 * >
 *   <p>Additional content can go here.</p>
 * </ModalContainer>
 */
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
