import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'components/Logo';

const SignUpLink = <Link to='sign-up'>Sign Up</Link>;
const SignInLink = <Link to='login'>Sign In</Link>;

const LinkComponent = {
  '/': SignInLink,
  '/login': SignUpLink,
  '/sign-up': SignInLink,
};

const Header = props => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Logo />
      {LinkComponent[pathname]}
    </div>
  );
};

export default Header;
