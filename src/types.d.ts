type ColorState = {
    normal: string;
    hover: string;
    focus: string;
    active?: string;
    disabled?: string;
};

type Color = {
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    background: ColorState;
    surface: ColorState;
    border: ColorState;
    warning: string;
    success: string;
    error: string;
};

type fontState = {
    none?: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
};

type Sizes = {
    small: string;
    medium: string;
    large: string;
};

type sizes = 'small' | 'medium' | 'large';

type SpacingSizes = Sizes & {
    none: string;
    xLarge: string;
    xxLarge: string;
};

type ComponentState = {
    padding?: Sizes;
    radius?: Sizes;
    lightshadow?: string;
    darkshadow?: string;
    sizes?: Sizes;
    positions?: {
        top?: Sizes;
        right?: Sizes;
        bottom?: Sizes;
        left?: Sizes;
    };
    custom?: any;
};

interface Theme {
    lightColors: Color;
    darkColors: Color;
    spacing: SpacingSizes;
    typography: {
        fontFamily: string;
        fontSize: fontState;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightBold: number;
        lineHeight: number;
        letterSpacing: fontState;
    };
    borderRadius: Sizes;
    breakpoints: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    transitions: {
        fast: string;
        medium: string;
        slow: string;
        xslow: string;
    };
    components: {
        buttons: ComponentState;
        inputs: ComponentState;
        radios: ComponentState;
        checkboxes: ComponentState;
        uploads: ComponentState;
        toggles: ComponentState;
        sliders: ComponentState;
        dropdowns: ComponentState;
    };
}
