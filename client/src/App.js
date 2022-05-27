import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/forgotPassword/ForgotPassword.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import SignIn from './components/signIn/SignIn.jsx';

function App() {
  return (
    <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/forgot-password" element = {<ForgotPassword/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/signin" element = {<SignIn/>} />
    </Routes>
  );
}

export default App;
