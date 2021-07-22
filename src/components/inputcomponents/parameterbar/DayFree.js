import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField"
// import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    inputs: {
      minWidth: 200,
      margin: theme.spacing(),
    },
    // textfield: {
    //   background: "rgb(92, 158, 173)",
    // },
    // textfieldinput: {
    //   color: "white"
    // }
  }));

export default function DayFree({ setDayFree}) {
    const classes = useStyles()
    return (
        <FormControl className={classes.inputs}>
          <TextField
            label="1 Day Free"
            // className={classes.textfield}
            // InputLabelProps={{className: classes.textfieldinput}}
            select
            defaultValue=""
            onChange={event => setDayFree(event.target.value)}
          >
            <MenuItem value={""}><em>None</em></MenuItem>
            <MenuItem value={"Monday"}>Monday</MenuItem>
            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
            <MenuItem value={"Thursday"}>Thursday</MenuItem>
            <MenuItem value={"Friday"}>Friday</MenuItem>             
          </TextField>
            </FormControl>
    )
}
