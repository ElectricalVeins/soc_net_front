import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Logo from 'components/Logo';
import { signOut } from 'actions/actionCreators';
import styles from './Header.module.scss';

const Header = props => {
  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
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
