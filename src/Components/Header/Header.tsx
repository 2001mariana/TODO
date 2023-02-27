import classNames from 'classnames'
import { useContext } from 'react'
import { AppContext } from '../../Context/ContextApp'
import { AppContextProps } from '../../Models/AppContextProps'

import './Header.scss'

const Header = () => {
  const { authenticated, lang, theme } = useContext<AppContextProps>(AppContext)

  const HeaderClasses = classNames(
    'Header',
    `Header__authenticated--${authenticated}`,
    `Header--${theme}`
  )

  const authenticatedAndLangIsPT = authenticated && lang === 'pt'
  const unauthenticatedAndLangIsPT = authenticated === false && lang === 'pt'
  const authenticatedAndLangIsEN = authenticated && lang === 'en'
  const unauthenticatedAndLangIsEN = authenticated === false && lang === 'en'

  return (
    <>
      {authenticatedAndLangIsEN && (
        <header className={HeaderClasses}>Logged in!</header>
      )}

      {unauthenticatedAndLangIsEN && (
        <header className={HeaderClasses}>You need access your profile!</header>
      )}

      {authenticatedAndLangIsPT && (
        <header className={HeaderClasses}>Usuário logado com sucesso!</header>
      )}

      {unauthenticatedAndLangIsPT && (
        <header className={HeaderClasses}>
          Você precisa efetuar seu login!
        </header>
      )}
    </>
  )
}
export default Header
