import React from "react";
import Header from "./components/header/header";
import User from "./components/user/user";
import Repositories from "./components/repositories/repositories.jsx";
import {} from './global/style.css'
import {useGithub}  from "./hooks/userGithub";

function App() {
  const {githubState}  = useGithub()
  return (
 
    <div className="App">
      <Header/>
     
      {!githubState.loading?(<></>):<><User></User><Repositories/></>}
    
       
    </div>

  );
}

export default App;
