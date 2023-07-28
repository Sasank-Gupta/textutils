
import React,{useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light')
  
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='black'
      document.title='Textutils- DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.title='Textutils- LightMode'
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    {/* <Alert alert={alert}/> */}
    <div className="container my-3" >
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textform heading="Enter the text below to analyze" mode={mode}/> 
          </Route>
    </Switch>
    </div>
    {/* <About mode={mode}/> */}
    </Router>
    </>
  );
}

export default App;
