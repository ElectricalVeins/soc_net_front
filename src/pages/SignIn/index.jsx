import { useHistory } from 'react-router-dom';
import SignInForm from 'components/forms/SignIn';
import Header from 'components/AuthHeader';
import * as API from 'api/rest';

const SignIn = props => {
  const history = useHistory();

  const onSubmit = async values => {
    const {
      data: { data },
    } = await API.loginUser(values);

    history.replace('/');
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
