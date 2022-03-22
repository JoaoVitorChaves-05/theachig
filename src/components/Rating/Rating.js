import './Rating.css'

const Rating = () => {
    const time = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
    return (
        <div className="rating-content">
            <div className="rating-title-field">
                <h2><strong>Avaliações</strong></h2>
            </div>
            <div className="rating-input-comment">
                <form>
                    <textarea type="text" name="comment" placeholder="Adicione um comentário" />
                    <input type="number" name="rating" placeholder="Dê uma nota" min="0" max="5" step="0.1" required/>
                    <button type="submit">Adicionar comentário</button>
                </form>
            </div>
            <div className="rating-comment-area">
                <div className="rating-comment-field">
                    <p>Comentado por <strong>João Vitor</strong> em {time}</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Nota: 4.5/5</p>
                </div>
            </div>
        </div>
    )
}

export default Rating