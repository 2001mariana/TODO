import React from 'react'
import { AppContextProps } from '../Models/AppContextProps'

import './App.scss'
import Login from './Login'

const defaultAppContext: AppContextProps = {
  authenticated: false,
  lang: 'pt',
  theme: 'light'
}

export const AppContext = React.createContext(defaultAppContext)

const App = () => {
  return (
    <AppContext.Provider
      value={{
        authenticated: false,
        lang: 'en',
        theme: 'light'
      }}
    >
      <Login />
    </AppContext.Provider>
  )
}

export default App
