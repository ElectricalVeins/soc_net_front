import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { authRequest } from 'actions/actionCreators';

const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));

const Loader = () => (
  <div className='appLoader'>
    <HashLoader size={80} />
  </div>
);

const App = () => {
  const {
    auth: { user },
    app: { isInitialized },
  } = useSelector(({ auth, app }) => ({ auth, app }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(authRequest());
    }
  }, []);

  if (!isInitialized) {
    return <Loader />;
  }

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path={['/auth', '/login', '/sign-in', '/signin']}
            component={SignIn}
          />
          <Route path={['/sign-up', '/signup']} component={SignUp} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
