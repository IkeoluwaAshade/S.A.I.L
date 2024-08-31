import React, { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import background from '../assets/background.jpg'


const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

const lightTheme = {
    background: `#fff`,
    color: '#123'
}

const  darkTheme = {
    background: '#123',
    color: '#fff'
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('app-theme') || 'light';
    setTheme(savedTheme);
}, []);

const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('app-theme', newTheme);
};

const currentTheme = theme === 'light' ? lightTheme : darkTheme;

return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
)
}