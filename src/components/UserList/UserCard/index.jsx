import LazyImage from 'components/LazyImage';
import { IMAGE_PATH } from 'constants.js';
import UserImage from '../UserImage';

const UserCard = props => {
  const { imageSrc, firstName, lastName } = props;


  return (
    <div>
      <UserImage {...props} />
      <p>{JSON.stringify({ firstName, lastName }, null, 4)}</p>
    </div>
  );
};

export default UserCard;
