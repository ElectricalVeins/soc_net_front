import stc from 'string-to-color';
import LazyImage from 'components/LazyImage';
import { IMAGE_PATH } from 'constants.js';
import styles from './UserImage.module.scss';

const UserImage = props => {
  const { imageSrc, firstName, lastName, id } = props;

  const src = imageSrc ? `${IMAGE_PATH}${imageSrc}` : null;
  const alt = `${firstName} ${lastName}`;
  const color = stc(`${alt}${id}`);
  const initials = alt
    .split(' ')
    .map(w => w[0])
    .join('');

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.initials}>{initials}</div>
      <LazyImage src={src} alt={alt} />
    </div>
  );
};

export default UserImage;
