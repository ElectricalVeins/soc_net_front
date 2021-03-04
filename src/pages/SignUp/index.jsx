import { useHistory } from 'react-router-dom';
import SignUpForm from 'components/forms/SignUp';
import AuthHeader from 'components/AuthHeader';
import * as API from 'api/rest';

const SignUp = props => {
  const history = useHistory();

  const onSubmit = async values => {
    const {
      data: { data },
    } = await API.createUser(values);

    history.replace('/');
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
