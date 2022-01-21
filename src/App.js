import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/Login/Login';
import SignUp from './pages/register/SignUp';
import Services from './pages/Services';
import Schedule from './pages/Schedule';
import Confirm from './pages/Confirm';
import Choice from './pages/Choice';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="services" element={<Services />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="choice" element={<Choice />} />
      </Routes>
    </div>
  );
}

export default App;
