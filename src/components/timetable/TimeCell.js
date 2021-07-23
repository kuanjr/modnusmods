import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	tablecell: {
        height: 60,
        border: "solid",
        borderWidth: 0.1,
        padding: 0,
        borderColor: "#e6e6e6",
	},
    lessonCellRoot: {
        height: 50,
        padding: 5,
        margin: 1,
    },
    info: {
        fontSize: 15,
    }
  }));

export default function TimeCell({ name, duration, lessonType, modules }) {
    const classes = useStyles()
    if (name === "empty") {
        return <TableCell className={classes.tablecell}/>
    } else {
        // console.log(modules)
        var color = modules.filter(item => item.modulecode === name)[0].color
        // console.log(color)
        return <TableCell colSpan={duration} className={classes.tablecell}>
                    <Card className={classes.lessonCellRoot} style={{backgroundColor: color}}>
                        <Typography className={classes.info} noWrap>{name}</Typography>
                        <Typography className={classes.info} noWrap>{lessonType}</Typography>
                    </Card>
            </TableCell>
    }
    
}
