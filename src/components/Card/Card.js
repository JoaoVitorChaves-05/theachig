import './Card.css'
import logo from './example.jpg'
const Card = () => {
    return (
        <div className="card-content">
            <div className="card-image-field">
                <img src={logo} alt="Example" />
            </div>
            <div className="card-text-field">
                <h2>Maria</h2>
                <p>Disciplina(s): <strong>Língua Portuguesa e Literatura</strong></p>
                <p>Contato: (12) 99608-4898</p>
                <p>R$ 20/Hora</p>
                <p>Nota: 4.5/5</p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default Card