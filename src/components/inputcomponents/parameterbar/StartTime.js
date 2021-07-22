import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles((theme) => ({
    inputs: {
        minWidth: 80,
        margin: theme.spacing(1),
    },
  }));

export default function StartTime({ setStartTime }) {
    const classes = useStyles();
    function handleOnChange(event) {
      setStartTime(event.target.value)
      // console.log(event.target.value)
    }
    return (
        <FormControl className={classes.inputs}>
          <TextField
          label="Start"
          select 
          defaultValue="" 
          onChange={handleOnChange}
          >
            <MenuItem value={8}>8am</MenuItem>
            <MenuItem value={9}>9am</MenuItem>
            <MenuItem value={10}>10am</MenuItem>
            <MenuItem value={11}>11am</MenuItem>
            <MenuItem value={12}>12pm</MenuItem>
          </TextField>
      </FormControl>
    )
}
