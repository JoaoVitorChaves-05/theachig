import './Form.css'

const Form = ({isStudent}) => {

    if (!isStudent) return (
        <div className="main">
            <form action="http://192.168.15.44:8080/api/addTeacher" method="POST"className="form-create-user">
                <div className="form-create-user-field">
                    <label>Nome</label>
                    <input type="text" name="name" required/>
                </div>
                <div className="form-create-user-field">
                    <label>Foto</label>
                    <input id="photo" type="file" name="photo" accept=".png, .jpg, .jpeg" required />
                </div>
                <div className="form-create-user-field">
                    <label>E-mail</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="form-create-user-field">
                    <label>Senha</label>
                    <input name="password" type="password" required/>
                </div>
                <div className="form-create-user-field">
                    <label>Whatsapp</label>
                    <input type="tel" name="tel" required/>
                </div>
                <div className="form-create-user-field">
                    <label>Preço por hora</label>
                    <input type="number" name="price" min="0" step="0.01" required/>
                </div>
                <div className="form-create-user-field">
                    <label>Conte um pouco sobre você</label>
                    <textarea type="text" name="about" required/>
                </div>
                <div className="form-create-user-field">
                    <button type="submit" className="btn-submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )

    return (
        <div className="main">
            <form action="http://192.168.15.44:8080/api/addStudent" className="form-create-user">
                <div className="form-create-user-field">
                    <label>Nome</label>
                    <input type="text" name="name" required/>
                </div>
                <div className="form-create-user-field">
                    <label>E-mail</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="form-create-user-field">
                    <label>Senha</label>
                    <input type="password" required/>
                </div>
                <div className="form-create-user-field">
                    <button type="submit" className="btn-submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form