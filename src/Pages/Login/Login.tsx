import { useContext } from 'react'

import Button from '../../Components/Button'
import Card from '../../Components/Card'
import ContainerAnimatedBackground from '../../Components/ContainerAnimatedBackground'
import Input from '../../Components/Input'
import { AppContext } from '../../Context/ContextApp'
import { AppContextProps } from '../../Models/AppContextProps'

import './Login.scss'

const Login = () => {
  const { lang } = useContext<AppContextProps>(AppContext)

  const LangIsPT = lang === 'pt'
  const LangIsEN = lang === 'en'

  return (
    <>
      {LangIsEN && (
        <div className="Login">
          <ContainerAnimatedBackground />
          <Card>
            <Input label="Email" />
            <Input label="Name" />
            <Input label="Password" />
            <div className="Login__card--buttons">
              <Button label="Sign in" size="large" />
              <Button label="Sign up" size="large" />
            </div>
          </Card>
        </div>
      )}

      {LangIsPT && (
        <div className="Login">
          <Card>
            <Input label="Email" />
            <Input label="Nome" />
            <Input label="Senha" />
            <div className="Login__card--buttons">
              <Button label="Entrar" size="large" />
              <Button label="Criar conta" size="large" />
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
export default Login
