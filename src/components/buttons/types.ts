type ButtonVariant = 'primary' | 'outline' | 'text';

interface BaseButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    notifyText?: string;
    ariaLabel?: string;
    size?: 'small' | 'medium' | 'large';
}
