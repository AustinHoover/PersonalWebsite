/**
 * Theme storage
 */

/**
 * Local storage key for the theme
 */
const THEME_STORAGE_KEY: string = 'theme'

/**
 * Global variable that stores theme state
 */
export let themeIsDarkMode: boolean = false


/**
 * Inits the theme store
 */
export const initThemeStore = () => {
    if(!!window.localStorage.getItem(THEME_STORAGE_KEY)){
        themeIsDarkMode = true
    }
}


/**
 * Sets whether the current theme is dark more or not
 * @param value true if the theme is dark mode, false otherwise
 */
export const setThemeIsDarkMode = (value: boolean) => {
    themeIsDarkMode = value
    window.localStorage.setItem(THEME_STORAGE_KEY,value + '')
}

/**
 * Gets whether the theme is dark mode or not
 * @returns true if the theme is dark mode, false otherwise
 */
export const getThemeIsDarkMode = (): boolean => {
    return themeIsDarkMode
}