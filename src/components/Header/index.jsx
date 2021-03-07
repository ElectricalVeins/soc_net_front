import { Button } from '@material-ui/core';
import ACTIONS from 'actions';
import Logo from 'components/Logo';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';

const Header = props => {
  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    dispatch({ type: ACTIONS.SIGN_OUT });
  }, []);

  return (
    <header className={styles.container}>
      <Logo />
      <Button onClick={handleSignOut} variant='outlined'>
        Sign out
      </Button>
    </header>
  );
};

export default Header;
