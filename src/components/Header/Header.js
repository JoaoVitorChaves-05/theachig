import './Header.css'

const Header = ({isMyProfile, isLogged}) => {
    if (!isMyProfile)
        return (
            <header>
                <div className="logo-container">
                    <h1 className="title">Teaching</h1>
                </div>
                <nav className="navigation">
                    <a href="/signUp" className="create-user">Cadastre-se</a>
                    <a href="/signIn" className="login-button">Entrar</a>
                </nav>
            </header>
        )
    else if (isLogged)
        return (
            <header>
                <div className="logo-container">
                    <h1 className="title">Teaching</h1>
                </div>
                <nav className="navigation">
                    <a href="/myProfile" className="create-user">Meu perfil</a>
                </nav>
            </header>
        )
    else
        return (
            <header>
                <div className="logo-container">
                    <h1 className="title">Teaching</h1>
                </div>
                <nav className="navigation">
                    <a href="/" className="create-user">Sair</a>
                </nav>
            </header>
        )
}

export default Header