import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField"



const useStyles = makeStyles((theme) => ({
    inputs: {
        minWidth: 80,
        margin: theme.spacing(),
    },
  }));

export default function EndTime({ setEndTime }) {
    const classes = useStyles()
    return (
        <FormControl className={classes.inputs}>
          <TextField
          label="End"
          defaultValue=""
          select
          onChange={event => setEndTime(event.target.value)}
          >
            <MenuItem value={""}>--</MenuItem>
            <MenuItem value={16}>4pm</MenuItem>
            <MenuItem value={17}>5pm</MenuItem>
            <MenuItem value={18}>6pm</MenuItem>
            <MenuItem value={19}>7pm</MenuItem>
            <MenuItem value={20}>8pm</MenuItem>
          </TextField>

          {/* </Select>  */}
      </FormControl>
    )
}
