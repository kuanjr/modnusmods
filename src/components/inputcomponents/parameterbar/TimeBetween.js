import React, { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import { TextField } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    inputs: {
        minWidth: 200,
        margin: theme.spacing(),
    },
  }));


export default function TimeBetween({ setTimeBetween }) {
    const [isNumber, setIsNumber] = useState(true)
    const classes = useStyles();
    function handleGapBetween(e) {
        if (isNaN(e.target.value)) {
            setIsNumber(false)
        } else {
            setIsNumber(true)
            setTimeBetween(e.target.value)
        }
    }
    
    return (
      <TextField
        error={!isNumber}
        label="Gap between lessons"
        onChange ={handleGapBetween}
        defaultValue=""
        helperText={isNumber ? "" : "Input a number"}
        className={classes.inputs}
        // InputLabelProps={{
        //   shrink: true,
        // }}
      />
    )
}
