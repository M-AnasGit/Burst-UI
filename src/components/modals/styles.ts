import styled from "styled-components";

// ModalContainer component
export const Overlay = styled.div<{
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

// Modal Wrappers
export const TitleWrapper = styled.div<{ $size: sizes }>`
    background-color: ${({ theme }) => theme.colors.background.active};
    padding: ${({ theme, $size }) => theme.components.modals.padding[$size]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.normal};
`;

export const MessageWrapper = styled.div<{ $size: sizes }>`
    padding: ${({ theme, $size }) => theme.components.modals.padding[$size]};
`;

export const ModalWrapper = styled.div<{ $size: sizes; $minWidth: string }>`
    display: flex;
    flex-direction: column;
    min-width: ${({ $minWidth }) => $minWidth};

    border-radius: ${({ theme, $size }) =>
        theme.components.modals.radius[$size]};
    border: 2px solid ${({ theme }) => theme.colors.border.normal};

    background-color: ${({ theme }) => theme.colors.background.normal};

    overflow: auto;
`;


export const CustomWrapper = styled.div<{ $type: string; $size: sizes }>`
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

export const ButtonWrapper = styled.div<{ $size: sizes }>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${({ theme, $size }) => theme.components.modals.padding[$size] || '0.5rem'};
    padding-bottom: ${({ theme, $size }) => theme.components.modals.padding[$size] || '0.5rem'};
    padding-right: ${({ theme, $size }) => theme.components.modals.padding[$size] || '0.5rem'};
`


// Modal components
export const StyledTitle = styled.h1<{
    $size: sizes;
}>
`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.components.modals.sizes[$size]};
    font-weight: bold;

    color: ${({ theme }) => theme.colors.textPrimary};

    margin: 0;
`;

export const StyledMessage = styled.p<{ $size: sizes }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: normal;

    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;

    padding-bottom: ${({ theme, $size }) =>
        theme.components.modals.padding[$size]};
`;



export const CustomTitle = styled.h2<{ $type: string; $size: sizes }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: bold;

    color: ${({ theme, $type }) =>
        theme.components.modals.custom.message[$type].border};

    text-transform: capitalize;

    margin: 0;
`;

export const CustomMessage = styled.p<{ $type: string; $size: sizes }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    font-weight: normal;

    color: ${({ theme, $type }) =>
        theme.components.modals.custom.message[$type].text};
    margin: 0;
`;