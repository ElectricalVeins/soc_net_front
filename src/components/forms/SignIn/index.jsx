import { Formik, Form, Field } from 'formik';
import TextInput from 'components/forms/TextInput';
import { Button } from '@material-ui/core';

const SignInForm = props => {
  const { onSubmit } = props;

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div>
          <TextInput name='email' placeholder='Enter your email' />
          <TextInput
            name='password'
            type='password'
            placeholder='Enter your password'
          />
        </div>
        <Button type='submit' color='primary' variant='contained'>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
