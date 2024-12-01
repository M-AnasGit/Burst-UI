import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/700.css';

/**
 * Default library theme.
 */
export const defaultTheme: Theme = {
    lightColors: {
        textPrimary: '#212121',
        textSecondary: '#5F5F5F',
        textDisabled: '#9E9E9E',
        background: {
            normal: '#FAFAFA',
            hover: '#F4F4F4',
            focus: '#EDEDED',
            active: '#E5E5E5',
            disabled: '#F0F0F0',
        },
        surface: {
            normal: '#F7F7F7',
            hover: '#EFEFEF',
            focus: '#E6E6E6',
            active: '#DDDDDD',
            disabled: '#EEEEEE',
        },
        border: {
            normal: '#DADADA',
            hover: '#C8C8C8',
            focus: '#B3B3B3',
            disabled: '#E0E0E0',
        },
        warning: '#FFB84D',
        success: '#66BB6A',
        error: '#E57373',
    },

    darkColors: {
        textPrimary: '#EDEDED',
        textSecondary: '#BDBDBD',
        textDisabled: '#707070',
        background: {
            normal: '#141414',
            hover: '#2A2A2A',
            focus: '#252525',
            active: '#2F2F2F',
            disabled: '#1A1A1A',
        },
        surface: {
            normal: '#1A1A1A',
            hover: '#242424',
            focus: '#313131',
            active: '#3A3A3A',
            disabled: '#2A2A2A',
        },
        border: {
            normal: '#3D3D3D',
            hover: '#4C4C4C',
            focus: '#606060',
            disabled: '#2A2A2A',
        },
        success: '#A5D6A7',
        error: '#EF9A9A',
        warning: '#FFC170',
    },

    spacing: {
        none: '0rem',
        small: '0.5rem',
        medium: '1rem',
        large: '1.5rem',
        xLarge: '2rem',
        xxLarge: '3rem',
    },

    typography: {
        fontFamily: '"Public Sans", sans-serif',
        fontSize: {
            xsmall: '0.625rem',
            small: '0.75rem',
            medium: '0.875rem',
            large: '1rem',
            xlarge: '1.125rem',
        },
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightBold: 700,
        lineHeight: 1.5,
        letterSpacing: {
            none: '0rem',
            xsmall: '0.015625rem',
            small: '0.03125rem',
            medium: '0.046875rem',
            large: '0.0625rem',
            xlarge: '0.09375rem',
        },
    },

    borderRadius: {
        small: '0.125rem',
        medium: '0.25rem',
        large: '0.5rem',
    },

    breakpoints: {
        xs: '0rem',
        sm: '37.5rem',
        md: '60rem',
        lg: '80rem',
        xl: '100rem',
    },

    transitions: {
        fast: '0.0625s ease',
        medium: '0.125s ease',
        slow: '0.1875s ease',
        xslow: '0.3125s ease',
    },

    components: {
        buttons: {
            padding: {
                small: '0.5rem 1rem',
                medium: '0.75rem 1.5rem',
                large: '1rem 2rem',
            },
            sizes: {
                small: '1.5rem',
                medium: '2rem',
                large: '2.5rem',
            },
            positions: {
                top: {
                    small: '-0.6rem',
                    medium: '-1rem',
                    large: '-1.25rem',
                },
            },
            radius: {
                small: '0.25rem',
                medium: '0.5rem',
                large: '0.75rem',
            },
            custom: {
                notifications: {
                    small: '0.33rem',
                    medium: '0.5rem',
                    large: '0.625rem',
                },
            },
            lightshadow:
                '0rem 0.125rem 0.1875rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.0625rem 0rem 0rem rgba(25,28,33,0.02), 0rem 0rem 0rem 0.0625rem rgba(25,28,33,0.08)',
            darkshadow:
                '0rem 0.125rem 0.1875rem -0.0625rem rgba(0, 0, 0, .2), 0.0625rem 0.0625rem 0.0625rem rgba(25,28,33,.04), 0.0625rem 0.0625rem 0.0625rem rgba(25,28,33,.12)',
        },
        inputs: {
            padding: {
                small: '0.5rem',
                medium: '0.75rem',
                large: '0.875rem',
            },
            radius: {
                small: '0.125rem',
                medium: '0.25rem',
                large: '0.5rem',
            },
        },
        radios: {
            sizes: {
                small: '0.25rem',
                medium: '0.75rem',
                large: '1.25rem',
            },
            padding: {
                small: '0.125rem',
                medium: '0.25rem',
                large: '0.375rem',
            },
        },
        checkboxes: {
            sizes: {
                small: '0.75rem',
                medium: '1rem',
                large: '1.25rem',
            },
            padding: {
                small: '0.125rem',
                medium: '0.25rem',
                large: '0.375rem',
            },
        },
        uploads: {
            padding: {
                small: '0.5rem 1rem',
                medium: '0.75rem 1.5rem',
                large: '1rem 2rem',
            },
            radius: {
                small: '0.25rem',
                medium: '0.5rem',
                large: '0.75rem',
            },
            sizes: {
                small: '1.5rem',
                medium: '2rem',
                large: '2.5rem',
            },
        },
        toggles: {
            padding: {
                small: '0.25rem',
                medium: '0.375rem',
                large: '0.5rem',
            },
            sizes: {
                small: '2.5rem',
                medium: '4rem',
                large: '5rem',
            },
            radius: {
                small: '2rem',
                medium: '1.5rem',
                large: '1.25rem',
            },
            custom: {
                slider: {
                    small: '0.75rem',
                    medium: '1rem',
                    large: '1.5rem',
                },
            },
        },
        sliders: {
            sizes: {
                small: '0.5rem',
                medium: '0.75rem',
                large: '1rem',
            },
            radius: {
                small: '0.25rem',
                medium: '0.5rem',
                large: '0.75rem',
            },
            custom: {
                thumb: {
                    sizes: {
                        small: '1rem',
                        medium: '1.5rem',
                        large: '2rem',
                    },
                    positions: {
                        top: {
                            small: '-5px',
                            medium: '-6px',
                            large: '-7px',
                        },
                    },
                },
            },
        },
        dropdowns: {
            padding: {
                small: '0.5rem 0.25rem',
                medium: '0.5rem',
                large: '0.75rem',
            },
            radius: {
                small: '0.25rem',
                medium: '0.5rem',
                large: '0.75rem',
            },
            custom: {
                height: {
                    small: '10rem',
                    medium: '15rem',
                    large: '20rem',
                },
            },
        },
    },
};
