import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ACTIONS from 'actions';
import SignInForm from 'components/forms/SignIn';
import Header from 'components/AuthHeader';

const SignIn = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async values => {
    dispatch({
      type: ACTIONS.LOGIN_USER_REQUEST,
      data: values,
      history,
    });
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
