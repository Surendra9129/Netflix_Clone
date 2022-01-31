import logo from './logo.svg';
import './app.scss';
import Register from './components/pages/register/Register';
import Home from './components/pages/home/Home';
import Watch from './components/pages/watch/Watch';
import Login from './components/pages/login/Login'; 
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
function App() {
  const user=true;
  return (
    <Router>
    <Switch>
      <Route exact path='/'>
       {user? <Home /> : <Redirect to='/register'/>}
      </Route>

      <Route path='/register'>
      {!user? <Register /> : <Redirect to='/'/>}
      </Route>

      <Route path='/login'>
      {!user? <Login /> : <Redirect to='/register'/>}
      </Route>
     {user && (
       <>
       
      <Route exact path='/movies'>
       <Home type='movies' />
      </Route>
      <Route exact path='/series'>
       <Home type='series'/>
      </Route>

      <Route exact path='/watch'>
       <Watch/>
      </Route>
       </>
     )}

    </Switch>
    </Router>
  );
}

export default App;
