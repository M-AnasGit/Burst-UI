import styled from 'styled-components';
import Label from '../utils/Label';

// General Wrappers
export const FlexRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FlexColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexItemsCenterWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const BlockWrapper = styled(FlexColumnWrapper)`
    display: block;
`

export const NoShrinkWrapper = styled.div<{
    $size: sizes
}>
`
    flex-shrink: 0;
    margin-bottom: ${({ theme, $size }) => theme.spacing[$size]};
`

// Generic text
export const Error = styled.p`
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.typography.fontSize.xsmall};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    margin-top: 0.25rem;
`;

export const Required = styled.span`
    color: ${({ theme }) => theme.colors.error};
    margin-left: 0.25rem;
`;

export const LabelWithDisable = styled(Label)<{ $size: string; $disabled: boolean }>`
    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'};
`;

// Input Wrappers
export const InputWrapper = styled(FlexColumnWrapper)<{
    $hasError: boolean;
    $size: string;
    $disabled: boolean;
}>
`
    flex-direction: row;
    align-items: center;

    background-color: ${({ theme, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : theme.colors.background.normal};
    border: 1px solid
        ${({ theme, $hasError }) =>
            $hasError ? theme.colors.error : theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.inputs.radius[$size]};

    padding: ${({ theme, $size }) => theme.components.inputs.padding[$size]};
    margin-bottom: 0;
`;

export const IconWrapper = styled.span<{ $size: sizes }>`
    display: flex;
    align-items: center;
    padding-left: ${({ theme, $size }) =>
        theme.components.inputs.padding[$size]};
`;

// Input Components
export const StyledInput = styled.input<{
    $hasError: boolean;
    $size: sizes;
    $disabled: boolean;
}>
`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};

    background-color: transparent;
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    border: none;
    outline: none;

    width: 100%;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.background.disabled};
        cursor: not-allowed;
    }
`;

// Textarea Components
export const StyledTextArea = styled.textarea<{
    $hasError: boolean;
    $size: sizes;
    $disabled: boolean;
}>
`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};

    background-color: transparent;
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    border: none;
    outline: none;

    width: 100%;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.background.disabled};
        cursor: not-allowed;
    }
`;

// Dropdown Wrappers
export const DropdownWrapper = styled.div`
    position: absolute;
    width: 'fit-content';
    max-width: 100%;
`;

export const OptionsWrapper = styled.div<{ $size: sizes }>`
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-top: 2px;

    max-height: ${({ theme, $size }) =>
        theme.components.dropdowns.custom.height[$size]};
    overflow: auto;

    background-color: ${({ theme }) => theme.components.dropdowns.background};

    border: 2px solid ${({ theme }) => theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.dropdowns.radius[$size]};

    padding: ${({ theme }) => theme.components.dropdowns.padding};

    :first-child {
        border-top: none;
    }
`;

// Dropdown Components
export const Option = styled.button<{ $size: sizes }>`
    background-color: ${({ theme }) => theme.colors.background.normal};
    color: ${({ theme }) => theme.colors.textSecondary};

    border: none;
    border-top: 2px solid ${({ theme }) => theme.colors.border.normal};

    padding: ${({ theme, $size }) => theme.components.dropdowns.padding[$size]};

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.hover};
        color: ${({ theme }) => theme.colors.textPrimary};
    }
`;

// Radio Wrappers
export const RadioWrapper = styled.div<{
    $size: sizes;
    $direction: 'row' | 'column';
}>
`
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
    align-items: ${({ $direction }) => $direction === 'column' ? 'flex-start' : 'center'};
    margin-top: ${({ theme, $size}) => theme.spacing[$size]};
`

// Radio Components
export const RadioLabel = styled(Label)<{
    $direction: 'row' | 'column';
    $selected: boolean;
    $disabled: boolean;
}>
`
    display: flex;
    align-items: center;

    color: ${({ theme, $selected, $disabled }) =>
        $selected
            ? theme.colors.textPrimary
            : $disabled
              ? theme.colors.textDisabled
              : theme.colors.textSecondary};

    margin-bottom: ${({ $direction }) => ($direction === 'column' ? '8px' : 0)};
    margin-right: ${({ $direction }) => ($direction === 'row' ? '16px' : 0)};
    &:last-child {
        margin-right: 0;
    }

    cursor: pointer;

    ${({ $disabled }) => $disabled && `cursor: not-allowed;`}
`;

export const HiddenRadio = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

export const Radio = styled.div<{
    $selected: boolean;
    $size: sizes;
    $disabled: boolean;
}>
`
    width: ${({ theme, $size }) => theme.components.radios.sizes[$size]};
    height: ${({ theme, $size }) => theme.components.radios.sizes[$size]};

    padding: ${({ theme, $size }) => theme.components.radios.padding[$size]};
    margin-right: 8px;

    border-radius: 50%;
    border: 2px solid
        ${({ theme, $selected, $disabled }) =>
            $selected
                ? theme.colors.textPrimary
                : $disabled ? theme.colors.textDisabled : theme.colors.textSecondary};

    &:disabled {
        cursor: not-allowed;
    }
`;

// Checkbox Components
export const CheckboxLabel = styled(Label)<{ $size: string; $disabled: boolean }>`
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    margin-left: 0.5rem;
    margin-bottom: 0;

    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;

export const StyledCheckbox = styled.div<{
    $checked: boolean;
    $disabled: boolean;
    $size: sizes;
}>
`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ theme, $size }) => theme.components.checkboxes.sizes[$size]};
    height: ${({ theme, $size }) => theme.components.checkboxes.sizes[$size]};

    background-color: ${({ theme, $checked, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : $checked
              ? theme.colors.textPrimary
              : theme.colors.background.normal};
    border: 2px solid
        ${({ theme, $checked, $disabled }) =>
            $disabled
                ? theme.colors.border.disabled
                : $checked
                  ? theme.colors.textPrimary
                  : theme.colors.border.normal};
    border-radius: 0.25rem;

    transition: all 0.2s ease-in-out;
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export const CheckmarkIcon = styled.div<{ $checked: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    opacity: ${({ $checked }) => ($checked ? 1 : 0)};

    transition: opacity 0.2s ease-in-out;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    z-index: 1;

    opacity: 0;
    cursor: pointer;
`;

// Upload Wrappers
export const UploadWrapper = styled.div<{ $size: sizes; $disabled: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : theme.colors.background.normal};
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textSecondary};

    border: 2px solid ${({ theme }) => theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.uploads.radius[$size]};

    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;

export const UploadContainer = styled.div<{ $size: sizes }>`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    gap: ${({ theme, $size }) => theme.spacing[$size]};
`

// Upload Components
export const HiddenUpload = styled.input`
    display: none;
    z-index: 1;
    cursor: pointer;
`;

export const NothingUploaded = styled(UploadWrapper)`
    flex: 1;
`;

export const FileDetails = styled.p<{ $size: sizes; $disabled: boolean }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};

    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textSecondary};

    padding: 0 ${({ theme }) => theme.spacing.small};
`;

// Slider Wrappers
export const ToggleWrapper = styled.div<{ $inline: boolean }>`
    display: flex;
    flex-direction: ${({ $inline }) => ($inline ? 'row' : 'column')};
    align-items: ${({ $inline }) => ($inline ? 'center' : 'flex-start')};
`

// Slider Components
export const ToggleLabel = styled(Label)<{
    $size: sizes;
    $disabled: boolean;
    $inline: boolean;
}>
`
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};

    ${({ theme, $inline, $size }) =>
        $inline
            ? `margin-right: ${theme.spacing[$size]};
                margin-bottom: 0;
            `
            : `margin-bottom: ${theme.components.toggles.padding[$size]};`}
    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;

export const ToggleSwitch = styled.button<{
    $size: sizes;
    $checked: boolean;
    $disabled: boolean;
}>
`        
    display: flex;
    justify-content: ${({ $checked }) => ($checked ? 'flex-end' : 'flex-start')};
    width: ${({ theme, $size }) => theme.components.toggles.sizes[$size]};

    background-color: ${({ theme, $checked, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : $checked
              ? theme.colors.background.active
              : theme.colors.background.normal};

    padding: ${({ theme, $size }) => theme.components.toggles.padding[$size]};
    border: 1px solid
        ${({ theme, $disabled }) =>
            $disabled
                ? theme.colors.border.disabled
                : theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.toggles.radius[$size]};

    cursor: pointer;

    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;

export const ToggleSlider = styled.div<{
    $size: sizes;
    $checked: boolean;
    $disabled: boolean;
}>
`
    width: ${({ theme, $size }) =>
        theme.components.toggles.custom.slider[$size]};
    height: ${({ theme, $size }) =>
        theme.components.toggles.custom.slider[$size]};

    background-color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};

    border-radius: ${({ theme, $size }) =>
        theme.components.toggles.radius[$size]};

    transition: ${({ theme }) => theme.transitions.slow};
`;

// Slider Wrappers
export const SliderContainer = styled.div<{ $disabled: boolean; $size: sizes }>`
    position: relative;
    height: ${({ theme, $size }) => theme.components.sliders.sizes[$size]};
    width: 100%;

    background-color: ${({ theme, $disabled }) =>
        $disabled
            ? theme.colors.background.disabled
            : theme.colors.background.normal};

    border: 1px solid
        ${({ theme, $disabled }) =>
            $disabled
                ? theme.colors.border.disabled
                : theme.colors.border.normal};
    border-radius: ${({ theme, $size }) =>
        theme.components.sliders.radius[$size]};

    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export const SliderWrapper = styled.div<{ $size: sizes }>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    gap: ${({ theme, $size }) => theme.spacing[$size]};
`


// Slider Components
export const SliderLabel = styled(Label)<{ $disabled: boolean }>`
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.disabled : theme.colors.text};
`;

export const RangeLabel = styled.span<{ $size: sizes; $disabled: boolean }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textSecondary};
`;

export const SliderThumb = styled.div<{
    $disabled: boolean;
    $size: sizes;
    value: number;
    min: number;
    max: number;
}>
`
    position: absolute;
    top: ${({ theme, $size }) =>
        `${theme.components.sliders.custom.thumb.positions.top[$size]}`};
    left: ${({ value, min, max }) => `${((value - min) / (max - min)) * 100 - 0.5}%`};

    width: ${({ theme, $size }) =>
        theme.components.sliders.custom.thumb.sizes[$size]};
    height: ${({ theme, $size }) =>
        theme.components.sliders.custom.thumb.sizes[$size]};

    background-color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    border-radius: 50%;

    transition: left ${({ theme }) => theme.transitions.xslow};
`;

export const SliderProgress = styled.div<{
    $disabled: boolean;
    $size: sizes;
    value: number;
    min: number;
    max: number;
}>
`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: ${({ value, min, max }) =>
        `${((value - min) / (max - min)) * 100}%`};

    background-color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.textDisabled : theme.colors.textPrimary};
    border-radius: ${({ theme, $size }) =>
        theme.components.sliders.radius[$size]};
`;