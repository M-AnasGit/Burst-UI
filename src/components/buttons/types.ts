type ButtonVariant = 'primary' | 'outline' | 'text';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    size?: sizes;
    variant?: ButtonVariant;
    loading?: boolean;
    disabled?: boolean;
    notifyText?: string;
    ariaLabel?: string;
    active?: boolean;
}

interface ActionButtonProps extends ButtonProps {
    width?: number | string;
    height?: number | string;
}
