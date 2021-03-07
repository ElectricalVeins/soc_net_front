import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import AuthHeader from 'components/Header/AuthHeader';
import Header from 'components/Header';
import PostList from 'components/PostList';
import UserList from 'components/UserList';

const Home = props => {
  const { user } = useSelector(state => state.auth);
  return (
    <>
      {user ? <Header /> : <AuthHeader />}
      <h1>Home Page</h1>
      <p>You logined as: {JSON.stringify(user, null, 4)}</p>
      <div>
        <Grid container>
          <Grid item xs={6}>
            <PostList />
          </Grid>
          <Grid item xs={6}>
            <UserList />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
