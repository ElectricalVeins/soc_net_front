import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path={['/auth', '/login', '/sign-in', '/signin']}
          component={SignIn}
        />
        {/* <Route path={['/sign-up', '/signup']} component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
