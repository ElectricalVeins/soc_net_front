import cx from 'classnames';
import { useField, ErrorMessage } from 'formik';
import { TextField } from '@material-ui/core';
import styles from './TextInput.module.scss';

const TextInput = props => {
  const { name, ...rest } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <label className={styles.container}>
      <TextField
        type='text'
        variant='outlined'
        label={props.placeholder}
        {...field}
        {...rest}
      />
    </label>
  );
};

export default TextInput;
