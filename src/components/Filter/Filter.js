import './Filter.css'
import { useState } from 'react'

const Filter = () => {

    const [schoolSubject, setSchoolSubject] = useState(null)
    const [typeRated, setTypeRated] = useState(null)
    const [typePrice, setTypePrice] = useState(null)

    return (
        <>
            <div className="filter-container">
                <div className="filter-field">
                    <select onChange={(e) => setSchoolSubject(e.target.value)} className="filter-item">
                        <optgroup>
                            <option value="null">Escolha uma disciplina</option>
                            <option value="Língua Portuguesa e Literatura">Língua Portuguesa e Literatura</option>
                            <option value="Matemática">Matemática</option>
                            <option value="História">História</option>
                            <option value="Geografia">Geografia</option>
                            <option value="Biologia">Biologia</option>
                            <option value="Física">Física</option>
                            <option value="Artes">Artes</option>
                            <option value="Educação Física">Educação Física</option>
                            <option value="Química">Química</option>
                            <option value="Sociologia">Sociologia</option>
                            <option value="Filosofia">Filosofia</option>
                        </optgroup>
                    </select>
                </div>
                <div className="filter-field">
                    <select onChange={(e) => setTypeRated(e.target.value)} className="filter-item">
                        <optgroup>
                            <option value="null">Escolha uma classificação</option>
                            <option value="Melhor avaliados">Melhor avaliados</option>
                            <option value="Mais populares">Mais populares</option>
                        </optgroup>
                    </select>
                </div>
                <div className="filter-field">
                    <select onChange={(e) => setTypePrice(e.target.value)} className="filter-item">
                        <optgroup>
                            <option value="null">Escolha uma classificação de preço</option>
                            <option value="Menor preço">Menor preço</option>
                            <option value="Maior preço">Maior preço</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="submit-filter">
                <button onClick={(e) => {
                    
                }}>Aplicar filtro</button>
            </div>
        </>
    )
}

export default Filter