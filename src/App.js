import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ACTIONS from 'actions';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

function App () {
  const {
    auth: { user },
    app: { isInitialized },
  } = useSelector(({ auth, app }) => ({ auth, app }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: ACTIONS.AUTHENTICATE_REQUEST });
    }
  }, []);

  if (!isInitialized) {
    return (
      <div className='appLoader'>
        <HashLoader size={80} />
      </div>
    );
  }

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
