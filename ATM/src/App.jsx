import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './Router/Router'
import { ThemeProvider } from './globalTheme/ThemeContext'
import GlobalStyles from './globalTheme/ThemeStyles'
import { UserProvider } from './globalTheme/UserContext'

const App = () => {
  return (
    <UserProvider>
        <ThemeProvider>
        <GlobalStyles />
        <RouterProvider router={mainRoute} />
      </ThemeProvider>
    </UserProvider>
  )
}

export default App