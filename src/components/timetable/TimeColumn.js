import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	tablecell: {
		borderRight: "solid #e6e6e6",
        borderWidth: 1,
        textAlign: "center"
	}
  }));
export default function TimeColumn({ time }) {
    const classes = useStyles();
    return (
        <TableCell colSpan={2} className={classes.tablecell}>{time}</TableCell>
    )
}
