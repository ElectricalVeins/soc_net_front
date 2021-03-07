import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserRequest } from 'actions/actionCreators';
import SignInForm from 'components/forms/SignIn';
import Header from 'components/Header/AuthHeader';

const SignIn = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async values => {
    dispatch(loginUserRequest({ values, history }));
  };

  return (
    <div>
      <Header />
      <h1>Sign In</h1>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignIn;
