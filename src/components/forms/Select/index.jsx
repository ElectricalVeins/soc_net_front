import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useField, ErrorMessage } from 'formik';

const GenderSelect = props => {
  const { name, ...rest } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <FormControl style={{ minWidth: '120px' }}>
      <InputLabel>Gender</InputLabel>
      <Select defaultValue='other' {...field}>
        <MenuItem value='male'>Male</MenuItem>
        <MenuItem value='female'>Female</MenuItem>
        <MenuItem value='other'>Other</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GenderSelect;
