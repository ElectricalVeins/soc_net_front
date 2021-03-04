import { Form, Formik } from 'formik';
import TextInput from 'components/forms/TextInput';
import GenderSelect from '../Select';
import { SIGN_UP } from 'utils/validationScheams';
import { Button } from '@material-ui/core';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirmation: '',
  gender: '',
  birthDate: '',
};

const SignUp = props => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_UP}
    >
      <Form>
        <div>
          <TextInput name='firstName' placeholder='First Name' />
          <TextInput name='lastName' placeholder='Last Name' />
        </div>
        <div>
          <TextInput name='email' placeholder='Email' />
          <TextInput name='phone' placeholder='Phone' />
        </div>
        <div>
          <TextInput name='password' type='password' placeholder='Password' />
          <TextInput
            name='passwordConfirmation'
            type='password'
            placeholder='Confirm password'
          />
        </div>
        <div>
          <TextInput name='birthDate' type='date' />
          <GenderSelect name='gender' />
        </div>
        <Button type='submit' color='primary' variant='contained'>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default SignUp;
