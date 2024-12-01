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

interface InputProps extends FormProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    options?: InputOptions;
}

interface TextAreaProps extends FormProps {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    minRows: number;
    options?: TextAreaOptions;
}

interface RadioGroupProps {
    name: string;
    options: RadioOptions[];
    selected: number;
    onChange: (i: number) => void;
    label?: string;
    disabled?: boolean;
    direction?: 'row' | 'column';
    defaultValue?: number;
    size?: sizes;
}

interface CheckboxProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    size?: sizes;
    required?: boolean | string;
}

interface UploadProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    uploadText?: string;
    noUploadedText?: string;
    label?: string;
    files?: File[];
    showFiles?: boolean;
    size?: sizes;
    disabled?: boolean;
    required?: boolean;
    types?: string;
    multiple?: boolean;
}

interface ToggleProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    inline?: boolean;
    checked?: boolean;
    disabled?: boolean;
    size?: sizes;
}

interface SliderProps {
    name: string;
    value: number;
    min: number;
    max: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    ariaLabel?: string;
    readOnly?: boolean;
    disabled?: boolean;
    size?: sizes;
}

interface DropdownProps {
    name: string;
    options: string[];
    value: string | null;
    onChange: (selected: string) => void;
    placeholder?: string;
    NoOptionsMessage?: string;
    defaultValue?: number | null;
    label?: string;
    ariaLabel?: string;
    disabled?: boolean;
    required?: boolean;
    size?: sizes;
}
