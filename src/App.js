import './App.css';
import Home from './screens/home.js'
import CreateUser from './screens/createUser.js'
import SignInUser from './screens/signInUser.js'
import ProfileScreen from './screens/profile.js'
import Profiles from './screens/profiles.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<CreateUser />} />
          <Route path="/signIn" element={<SignInUser />} />
          <Route path="/myProfile" element={<ProfileScreen />} />
          <Route path="/profile/:id" element={<Profiles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App