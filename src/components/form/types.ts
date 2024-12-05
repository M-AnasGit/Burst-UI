// Types
type TextAreaOptions = {
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean | string;
    maxLength?: number | { value: number; message: string };
    minLength?: number | { value: number; message: string };
    displayError?: boolean;
};

type InputOptions = TextAreaOptions & {
    password?: boolean;
    match?: string | { value: string; message: string };
    pattern?: RegExp | { value: RegExp; message: string };
    type?: string;
};

type RadioOptions = {
    label: string;
    disabled?: boolean;
};

// Intefaces
interface FormProps {
    name: string;
    placeholder: string;
    value: string;
    label?: string;
    ariaLabel?: string;
    size?: sizes;
}
