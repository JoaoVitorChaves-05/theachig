import './Profile.css'

const Profile = () => {

    return (
        <div className="profile-container">
            <form className="profile-form">
                <div className="profile-form-field">
                    <label>Foto</label>
                    <input type="file" name="photo" accept=".png, .jpg, .jpeg"/>
                </div>
                <div className="profile-form-field">
                    <label>Nome</label>
                    <input type="text" name="nome" />
                </div>
                <div className="profile-form-field">
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="profile-form-field">
                    <label>Senha</label>
                    <input type="password" name="senha" />
                </div>
                <div className="profile-form-field">
                    <label>Whatsapp</label>
                    <input type="tel" name="tel" />
                </div>
                <div className="profile-form-field">
                    <label>Preço por Hora</label>
                    <input type="number" name="price" />
                </div>
                <div className="profile-form-field">
                    <label>Conte um pouco sobre você</label>
                    <textarea name="about" />
                </div>
                <div className="profile-form-field">
                    <button>Atualizar dados</button>
                </div>
                <div className="profile-form-field">
                    <button className="btn-delete">Excluir conta</button>
                </div>
            </form>
        </div>
    )
}

export default Profile