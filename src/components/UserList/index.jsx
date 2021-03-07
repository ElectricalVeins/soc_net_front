import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest } from 'actions/actionCreators';
import UserCard from 'components/UserList/UserCard';
import styles from './UserList.module.scss';

const UserList = props => {
  const { users, isFetching, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return (
    <div className={styles.container}>
      {users.map(u => (
        <UserCard key={u.id} {...u} />
      ))}
    </div>
  );
};

export default UserList;
