/**
 * Context for the theme of the app
 */
export interface ThemeContextData {
    getTheme: () => boolean,
    setTheme: (value: boolean) => void,
}
