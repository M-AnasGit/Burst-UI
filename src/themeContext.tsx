import React from 'react';
import { defaultTheme } from './theme';

/**
 * Extends the base Theme type to include a specific colors property.
 */
interface UsedTheme extends Theme {
    colors: Color;
    theme: 'light' | 'dark';
}

/**
 * Defines the shape of the theme context value.
 */
interface ThemeContextType {
    theme: UsedTheme;
    toggleTheme: () => void;
}

/**
 * Default context value. Used when accessing context outside of provider.
 * Defaulted to the light theme.
 */
const defaultContextValue: ThemeContextType = {
    theme: {
        ...defaultTheme,
        colors: defaultTheme.lightColors,
        theme: 'light',
    },
    toggleTheme: () => {},
};

/**
 * React context for theme management.
 */
const ThemeContext = React.createContext<ThemeContextType>(defaultContextValue);

/**
 * ThemeProvider component that manages theme state and provides it to children.
 *
 * @param {React.ReactNode} props.children - Child components
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // State to track whether dark mode is active
    const [currentTheme, setCurrentTheme] = React.useState<Theme>(defaultTheme);
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

    /**
     * Toggles between light and dark mode.
     */
    const toggleTheme = (): void => {
        setIsDarkMode((prev) => !prev);
    };

    /**
     * Memoized theme object that updates when isDarkMode changes.
     */
    const theme: UsedTheme = React.useMemo(
        () => ({
            ...currentTheme,
            colors: isDarkMode
                ? defaultTheme.darkColors
                : defaultTheme.lightColors,
            theme: isDarkMode ? 'dark' : 'light',
        }),
        [isDarkMode, currentTheme],
    );

    /**
     * Merges new theme properties with the current theme.
     *
     * @param {Partial<Theme>} newTheme - Theme object to merge with current theme
     */
    const modifyTheme = React.useCallback((newTheme: Partial<Theme>): void => {
        setCurrentTheme((prev) => {
            return {
                ...prev,
                ...newTheme,
                spacing: {
                    ...prev.spacing,
                    ...newTheme.spacing,
                },
                typography: {
                    ...prev.typography,
                    ...newTheme.typography,
                },
                borderRadius: {
                    ...prev.borderRadius,
                    ...newTheme.borderRadius,
                },
                breakpoints: {
                    ...prev.breakpoints,
                    ...newTheme.breakpoints,
                },
                transitions: {
                    ...prev.transitions,
                    ...newTheme.transitions,
                },
                components: {
                    ...prev.components,
                    ...newTheme.components,
                },
            };
        });
    }, []);

    /**
     * Memoized context value to prevent unnecessary re-renders.
     */
    const contextValue = React.useMemo(
        () => ({ theme, toggleTheme, modifyTheme }),
        [theme, toggleTheme],
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * Custom hook to use the theme context.
 *
 * @throws {Error} If used outside of ThemeProvider
 * @returns {ThemeContextType} The current theme context value
 */
export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
