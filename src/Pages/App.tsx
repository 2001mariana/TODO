import { AppContext } from '../Context/ContextApp'

import './App.scss'
import Login from './Login'

const App = () => {
  return (
    <AppContext.Provider
      value={{
        authenticated: false,
        lang: 'pt',
        theme: 'light'
      }}
    >
      <Login />
    </AppContext.Provider>
  )
}

export default App
