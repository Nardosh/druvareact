import React, { useState } from 'react';
// import About  from './components/About.js';

import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert  from './components/Alert.js';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

const App = () => {
    
    const [mode, setMode] = useState('light'); // whether dark mode is enable or not
    const [alert, setAlert] = useState(null);
    
    const showAlert = (message, type) =>{
         setAlert({
             msg: message,
             type: type
         })
         setTimeout(() =>{
            setAlert(null);
         }, 1500);

         
    }

    // const greenMode = () =>{
    //     if (mode === 'light'){
    //         setMode('green');
            
    //     }
    //     else{
    //         setMode('light')
    //     }
    // }


    const toggleMode = () =>{
        if (mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor ='#290036';
            showAlert("Dark mode has been enabled", "success");
            document.title = 'TextUtils - Dark Mode';
            // setInterval(() => {
            //     document.title = 'TextUtils is an Amazing Mode';    
            // }, 2000);
            // setInterval(() => {
            //     document.title = ' Install TextUtils Now';    
            // }, 1500);

        }
        else{
            setMode('light');
            document.body.style.backgroundColor ='white';
            showAlert("Light mode has been enabled", "success");
            document.title = 'TextUtils - Light Mode';
        }
    }
    return (
       <>
      
      {/* <Router> */}
        {/* <Navbar/> */}
       {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
       <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}  />
     <Alert alert={alert}/>
       <div className="container my-3">
       
       {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm  showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      
       </div>
        {/* </Router> */}
    
       </>
    );
}

export default App;

