import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup';
import Page2 from './Page2';
import UserProfile from './UserProfile';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}>
        </Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/page2' element={<Page2/>}></Route>
        <Route path='/user-profile' element={<UserProfile />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App
