type CustomMessage = {
    title?: string;
    message: string;
    type:
        | 'info'
        | 'confirm'
        | 'alert'
        | 'warning'
        | 'error'
        | 'success'
        | 'custom';
};

interface ModalContainerProps {
    isOpen: boolean;
    ActiveModal: React.ReactNode;
    children?: React.ReactNode;
    overlayType?: 'darken' | 'blur' | 'none';
    overlayRoughness?: 'low' | 'medium' | 'high';
    onOverlayClick?: () => any;
}

interface ModalProps {
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
