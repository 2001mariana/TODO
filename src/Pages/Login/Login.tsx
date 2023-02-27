import { useContext } from 'react'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { AppContextProps } from '../../Models/AppContextProps'
import { AppContext } from '../../Pages/App'

import './Login.scss'

const Login = () => {
  const { lang } = useContext<AppContextProps>(AppContext)

  const LangIsPT = lang === 'pt'
  const LangIsEN = lang === 'en'

  return (
    <>
      {LangIsEN && (
        <div className="Login">
          <div className="Login__card">
            <Input label="Email" />
            <Input label="Name" />
            <Input label="Password" />
            <div className="Login__card--buttons">
              <Button label="Sign in" size="large" />
              <Button label="Sign up" size="large" />
            </div>
          </div>
        </div>
      )}

      {LangIsPT && (
        <div className="Login">
          <div className="Login__card">
            <Input label="Email" />
            <Input label="Nome" />
            <Input label="Senha" />
            <div className="Login__card--buttons">
              <Button label="Entrar" size="large" />
              <Button label="Criar conta" size="large" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Login
