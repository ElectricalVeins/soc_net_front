import { Formik, Form, Field } from 'formik';

const SignInForm = props => {
  const { onSubmit } = props;

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name='email' placeholder='Enter your email' />
        <Field
          name='password'
          type='password'
          placeholder='Enter your password'
        />
        <input type='submit' />
      </Form>
    </Formik>
  );
};

export default SignInForm;
