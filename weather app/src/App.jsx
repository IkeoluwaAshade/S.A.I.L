import React from 'react'
import { ThemeProvider } from './globalTheme/ThemeContext'
import GlobalStyles from './globalTheme/ThemeStyle'
import WeatherApp from './weatherApp'
import Footer from './Footer'

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <WeatherApp />
      <Footer />
    </ThemeProvider>
  )
}

export default App