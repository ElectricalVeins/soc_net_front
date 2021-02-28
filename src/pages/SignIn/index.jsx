import SignInForm from 'components/forms/SignIn';
import Header from 'components/Header';

const SignIn = props => {
  const onSubmit = values => {
    console.log(values);
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
