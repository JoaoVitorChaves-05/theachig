import { useParams } from "react-router-dom"
import { useState } from "react"
import Header from "../components/Header/Header.js"
import Card from "../components/Card/Card.js"
import Rating from "../components/Rating/Rating.js"

const Profiles = () => {
    let {id} = useParams()
    return (
        <>
            <Header isLogged={false} isMyProfile={false} />
            <div className="cards-content">
                <Card />
            </div>
            <Rating />
        </>
    )
}

export default Profiles