import logoMesto from '../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoMesto} alt="Лого" />
    </header>
  )
}

export default Header