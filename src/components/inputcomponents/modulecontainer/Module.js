import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    cardRoot: {
      borderRadius: 12,
    },
    cardHeaderRoot: {
        padding: 0,
        paddingLeft: 5,
        overflow: "hidden",
    },
    cardHeaderContent: {
        overflow: "hidden",
    }
  
  }));

export default function Module({ modules, removeModule, user }) {
    const classes = useStyles()
    return (
        <Grid item xs={4}>
          <Card raised className={classes.cardRoot} style={{backgroundColor: modules.color}}>
            <CardHeader
              classes={{
                root: classes.cardHeaderRoot,
                content: classes.cardHeaderContent
              }}
              action={
                <IconButton aria-label="cancel" onClick={e=>removeModule(e, user)} name={modules.modulecode}>
                  <ClearIcon />
                </IconButton>
              }
              titleTypographyProps={{variant:'subtitle2' }}
              subheaderTypographyProps={{variant:'subtitle2', noWrap:true}}
              title={modules.modulecode}
              subheader={modules.title}
            />
          </Card>
          
            {/* <Typography className={classes.root}>{module}</Typography>
            <IconButton edge="end">
                <ClearIcon />
            </IconButton> */}
        </Grid>

    )
}
