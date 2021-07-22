import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles((theme) => ({
    inputs: {
        minWidth: 200,
        margin: theme.spacing(),
    },
  }));


export default function LunchBreak({ setLunchBreak }) {
    const classes = useStyles() 
    return (
      <FormControl className={classes.inputs}>
        <TextField
        label="Lunch Break (12 - 2pm)"
        select
        defaultValue=""
        onChange={event => setLunchBreak(event.target.value)}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </TextField>
      </FormControl>
    )
}
