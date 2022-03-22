import Form from '../components/Form/FormSignIn.js'
import {useState} from 'react'

const SignInUser = () => {
    const [isStudent, setIsStudent] = useState(false)

    return (
        <div className="form-container">
            <div className="form">
                <div className="form-header">
                    <h1 className="title">Entrar na Teaching</h1>
                </div>
                <div className="form-create-user-field">
                    <label>Tipo de Login</label>
                    <div className="form-type-field">
                        <button onClick={(e) => {

                            setIsStudent(true)
                            let otherButton = e.target.previousElementSibling || e.target.nextElementSibling
                            otherButton.classList.remove('btn-active')
                            e.target.classList.add('btn-active')

                        }} className="btn">Aluno</button>
                        <button onClick={(e) => {

                            setIsStudent(false)
                            let otherButton = e.target.previousElementSibling || e.target.nextElementSibling
                            otherButton.classList.remove('btn-active')
                            e.target.classList.add('btn-active')
                            
                        }} className="btn btn-active">Professor</button>
                    </div>
                </div>
                <Form isStudent={isStudent} />
            </div>
        </div>
    )
}

export default SignInUser