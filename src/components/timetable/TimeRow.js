import React from 'react'
import TimeCell from './TimeCell'
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	tablecell: {
		borderRight: "solid #e6e6e6 1"
	}
  }));

export default function TimeRow({day, schedule, modules}) {
    const classes = useStyles();
    return (
        <>
            <TableCell colSpan={2} className={classes.tablecell}>{day}</TableCell>
            {schedule.map(cell => {
                // if (cell.name === "") {
                //     console.log(day)
                // }
                if (cell.name !== "") {
                    return (<TimeCell name={cell.name} duration={cell.duration} lessonType={cell.lessontype} modules={modules}/>)
                }
            })}
        </>
    )
}
