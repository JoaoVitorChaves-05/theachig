import './Form.css'

const Form = ({isStudent}) => {
    console.log(isStudent)
    if (isStudent)
        return (
            <div className="main">
                <form action="http://192.168.15.44:8080/api/authentication/student" method="POST" className="form-create-user">
                    <div className="form-create-user-field">
                        <label>E-mail</label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className="form-create-user-field">
                        <label>Senha</label>
                        <input name="password" type="password" required/>
                    </div>
                    <div className="form-create-user-field">
                        <button type="submit" className="btn-submit">Entrar</button>
                    </div>
                </form>
            </div>
        )
    else
        return (
            <div className="main">
                <form action="http://192.168.15.44:8080/api/authentication/teacher" method="POST" className="form-create-user">
                    <div className="form-create-user-field">
                        <label>E-mail</label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className="form-create-user-field">
                        <label>Senha</label>
                        <input name="password" type="password" required/>
                    </div>
                    <div className="form-create-user-field">
                        <button type="submit" className="btn-submit">Entrar</button>
                    </div>
                </form>
            </div>
        )
}

export default Form