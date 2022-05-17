import { Route, Routes } from 'react-router-dom';
import HeaderForms from './components/headerForms/HeaderForm.jsx';
import Login from './components/login/Login.jsx';

function App() {
  return (
    <Routes>
          <Route path="/login" element = {<Login/>} />
          <Route path="/header" element = {<HeaderForms/>} />
    </Routes>
  );
}

export default App;
