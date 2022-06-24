import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { useEffect, useState } from 'react';

function App() {

  const [token, setToken] = useState("")

  useEffect(  ()  =>  {

    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash =""
      window.localStorage.setItem("token", token)
      
    }

    setToken(token)
  
  }, [])

  const logout = () =>{
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div className="App">
       { token ?
          <Dashboard 
              token = {token}
              logout = {logout}
          />
        :
          <Login />

       }
    </div>
       
  );
}

export default App;
