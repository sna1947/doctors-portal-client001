import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import initializeAuthencation from './Pages/Login/Firebase/firebase.initialize';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

initializeAuthencation();

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="appointment" element={<Appointment />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
