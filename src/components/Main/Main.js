import './Main.css'
import { useState } from 'react'
import Card from '../Card/Card.js'

const Main = () => {
    const [numberOfPage, setNumberOfPage] = useState(1)

    return (
        <div className="main-content">
            <div className="cards-content">
                <Card />
            </div>
            <div className="footer-content">
                <div className="footer-field-content">
                    <button onClick={() => setNumberOfPage(numberOfPage - 1)}>Voltar</button>
                </div>
                <div className="footer-field-content">
                    <p>{numberOfPage}</p>
                </div>
                <div className="footer-field-content">
                    <button onClick={() => setNumberOfPage(numberOfPage + 1)}>Avançar</button>
                </div>
            </div>
        </div>
    )
}

export default Main