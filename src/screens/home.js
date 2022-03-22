import Header from '../components/Header/Header.js'
import Filter from '../components/Filter/Filter.js'
import Main from '../components/Main/Main.js'

const Home = () => {
    return (
        <>
            <Header isMyProfile={false}/>
            <Filter />
            <Main />
        </>
    )
}

export default Home