import '../app/App.css';
import { Routes, Route } from "react-router-dom"
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import DashBoardPage from '../pages/DashBoardPage';

function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="profile" element={ <ProfilePage /> } />
        <Route path="dashboard" element={ <DashBoardPage /> } />
      </Routes>
    </div>
   
    //<LoginPage />
     //<RegisterPage />
     //<HomePage />
     //<ProfilePage />
      //  <DashBoardPage />
   
  
   );
}

export default App;
