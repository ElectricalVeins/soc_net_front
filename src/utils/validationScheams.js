import * as Yup from 'yup';
import { isBefore, parseISO } from 'date-fns';

export const EMAIL_SCHEMA = Yup.string()
  .email('Enter a valid email')
  .required('This Field is required');

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z0-9]{1,32}$/, 'Enter a valid name')
  .required('First Name is required');

export const SIGN_IN = Yup.object().shape({
  email: EMAIL_SCHEMA,
  password: Yup.string().required('This Field is required'),
});

export const SIGN_UP = Yup.object().shape({
  email: EMAIL_SCHEMA,
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Enter a strong password'
    )
    .required('required'),
  passwordConfirmation: Yup.string()
    .required('confirm password is required')
    .oneOf([Yup.ref('password')], 'Confirmation password must match password'),
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'])
    .required(),
  birthDate: Yup.string().test('Birthday', 'Before today', value => {
    const getNow = () => new Date();
    return isBefore(parseISO(value), getNow());
  }),
});
