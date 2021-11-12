import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null,null);

  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  // setInterval(() => {
  //   document.title = "Text Utils is amazing ";
  // }, 1000);
  // setInterval(() => {
  //   document.title = " install Text Utils ";
  // }, 2000);
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("dark mode enable ", "success");
      document.title = "Text utils -  dark mode ";
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enable ", "danger");
      document.title = "Text utils -  light mode ";
    }
  }
  return (
    <>
    <Router>
        <Navbar  title="Dhaval" Abouttxt="About Us" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode}  togglemode={togglemode} />} />
          <Route exact path="/" element={<Textform heading="Enter Text to Analysis" mode={mode} togglemode={togglemode} alert={showAlert}/>} />
        </Routes>
    </Router>
    </>
  );
}

