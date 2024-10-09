import React, { createContext, useState, useContext } from 'react';
// Criação do contexto
const ThemeContext = createContext();
// Provedor do contexto
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Define o tema inicial

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
// Hook personalizado para usar o contexto
export const useTheme = () => useContext(ThemeContext);