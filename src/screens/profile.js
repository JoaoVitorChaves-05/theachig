import Header from '../components/Header/Header.js'
import Profile from '../components/Profile/Profile.js'

const ProfileScreen = () => {
    return (
        <>
            <Header isMyProfile={true}/>
            <Profile />
        </>
    )
}

export default ProfileScreen