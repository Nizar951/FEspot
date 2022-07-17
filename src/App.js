import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { useEffect } from 'react';
import {setUserToken} from './store/user';
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  const user_token = useSelector(state => state.user.user_token);

  useEffect(  ()  =>  {

    const hash = window.location.hash;
    window.location.hash = "";

    if(!user_token && hash){
      const _token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.localStorage.setItem("token", _token)
      dispatch(setUserToken(_token))
    
    }
  
  }, [user_token, dispatch])

  const logout = () =>{
    const token = ""
    dispatch(setUserToken(token))
    window.localStorage.removeItem("token")
  }

  return (
    <Router>
      <Switch>
        <Route path='/create-playlist' exact={true}>
        { user_token ?
            (<Dashboard 
            logout = {logout}
            />)
            :
            (<Redirect exact from='/create-playlist'to='/' />)
        }
        </Route>
        <Route path='/'>
        { user_token ?
            (<Dashboard 
            logout = {logout}
            />)
            :
            <Login />
        }
        </Route>
      </Switch>
    </Router>
       
  );
}

export default App;
