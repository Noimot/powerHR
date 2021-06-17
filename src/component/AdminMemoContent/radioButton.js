import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({ value, handleChange}) {
//   const [value, setValue] = React.useState('female');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

  return (
    <FormControl component="fieldset">
         <FormLabel component="legend">Send memo to</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} row>
        <FormControlLabel value="employee" control={<Radio />} label="employee" />
        <FormControlLabel value="allEmployee" control={<Radio />} label="all employee " />
        <FormControlLabel value="department" control={<Radio />} label="dept" />
      </RadioGroup>
    </FormControl>
  );
}