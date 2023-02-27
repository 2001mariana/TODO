import React from 'react'
import { AppContextProps } from '../Models/AppContextProps'

const defaultAppContext: AppContextProps = {
  authenticated: false,
  lang: 'pt',
  theme: 'light'
}

export const AppContext = React.createContext(defaultAppContext)
