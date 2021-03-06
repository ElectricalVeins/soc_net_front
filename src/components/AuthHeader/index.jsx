import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Logo from 'components/Logo';
import ACTIONS from 'actions';
import styles from './Header.module.scss';

const SignUpLink = <Link to='sign-up'>Sign Up</Link>;
const SignInLink = <Link to='login'>Sign In</Link>;

const LinkComponent = {
  '/': SignInLink,
  '/login': SignUpLink,
  '/sign-up': SignInLink,
};

const Header = props => {
  const { pathname } = useLocation();
  const { user } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    dispatch({
      type: ACTIONS.SIGN_OUT,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Logo />
      {user ? (
        <Button onClick={handleSignOut} variant='outlined'>
          Sign out
        </Button>
      ) : (
        LinkComponent[pathname]
      )}
    </div>
  );
};

export default Header;
