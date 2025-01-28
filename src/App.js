
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import AboutUs from './components/AboutUs';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {BrowserRouter as Router, Routes ,Route,} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [btnText, setBtnText]=useState("Enable Dark Mode");
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setBtnText("Enable Light Mode")
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success")
    }
    
    else{
      setMode('light');
      setBtnText("Enable Dark Mode")
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar title="WordAudit" about='AboutUs' mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <Alert alert={alert}/>
       <div className='container my-3'>
       <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* <Routes> */}
          {/* <Route path="/about" element={<AboutUs mode={mode} about="About Us"/>}/> */}
          {/* <Route path="/" element={}/> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;