import styled from "styled-components";

// Not using styled-components keyframes because I need the animation name to not be hashed
export const DrawerWrapper = styled.div<{
    $position: "left" | "right";
    $minWidth: string;
    $maxWidth: string;
    $isOpen: boolean;
    $display: "block" | "none";
}>
`
    position: fixed;
    top: 0;
    bottom: 0;
    ${({ $position }) => ($position === "left" ? "left: 0;" : "right: 0;")}
    z-index: 10000;

    display: ${({ $display }) => $display};

    width: ${({ $minWidth }) => $minWidth};
    max-width: ${({ $maxWidth }) => $maxWidth};
    background-color: ${({ theme }) => theme.colors.background.normal};

    box-shadow: ${({ theme }) =>
        theme.theme === "dark"
            ? theme.components.drawers.darkshadow
            : theme.components.drawers.lightshadow};

    padding: ${({ theme }) => theme.spacing.medium};

    animation: ${({ $isOpen, $position }) =>
            $isOpen
                ? $position === "left"
                    ? "slideInLeft"
                    : "slideInRight"
                : $position === "left"
                ? "slideOutLeft"
                : "slideOutRight"}
        0.3s ease-in-out;
    transform: ${({ $isOpen, $position }) =>
        $isOpen ? "translateX(0)" : $position === "left" ? "translateX(-100%)" : "translateX(100%)"};

    @keyframes slideInLeft {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slideOutLeft {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }
`;

export const Overlay = styled.div<{
    $isOpen: boolean;
    $overlayType: "darken" | "blur" | "none";
    $overlayRoughness: "low" | "medium" | "high";
}>
`
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${({ $isOpen }) => ($isOpen ? 9999 : -1)};

    background-color: ${({ theme, $overlayType, $overlayRoughness, $isOpen }) =>
        !$isOpen ? "transparent" :
        $overlayType === "darken"
            ? theme.components.modals.custom.darken[$overlayRoughness]
            : "transparent"};
    backdrop-filter: ${({ theme, $overlayType, $overlayRoughness }) =>
        $overlayType === "blur"
            ? theme.components.modals.custom.blur[$overlayRoughness]
            : "none"};

    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
`;
