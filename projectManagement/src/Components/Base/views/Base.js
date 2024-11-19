import React from 'react'
import ThemeProvider from "../../theme/index"
import BasePage from './BasePage'
const Base = ({ children }) => {
    return (
        <ThemeProvider>
            <BasePage>
                {children}
            </BasePage>
        </ThemeProvider>
    )
}

export default Base