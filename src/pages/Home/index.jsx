import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from 'components/AuthHeader';

const Home = props => {
  const { user } = useSelector(state => state.authReducer);
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <p>You logined as: {JSON.stringify(user, null, 4)}</p>
    </>
  );
};

export default Home;
