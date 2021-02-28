import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = props => {
  return (
    <Link to='/' className={styles.container}>
      SOC NET
    </Link>
  );
};

export default Logo;
