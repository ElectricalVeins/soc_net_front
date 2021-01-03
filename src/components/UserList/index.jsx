import { useState, useEffect } from 'react';
import UserCard from '../UserCard';
import styles from './UserList.module.scss';

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await fetch(
        'http://localhost:3000/api/users'
      ).then((data) => data.json());
      console.log(data);
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default UserList;
