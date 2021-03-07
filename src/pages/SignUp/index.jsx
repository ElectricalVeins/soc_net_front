import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ACTIONS from 'actions';
import SignUpForm from 'components/forms/SignUp';
import AuthHeader from 'components/Header/AuthHeader';

const SignUp = props => {
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
      <AuthHeader />
      <h1>Create your account!</h1>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignUp;
