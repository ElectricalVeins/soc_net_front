import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ACTIONS from 'actions';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

function App () {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: ACTIONS.AUTHENTICATE_REQUEST });
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path={['/auth', '/login', '/sign-in', '/signin']}
          component={SignIn}
        />
        <Route path={['/sign-up', '/signup']} component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
