import React, { useState }from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar';

import StartTime from './StartTime';
import EndTime from './EndTime';
import TimeBetween from './TimeBetween';
import LunchBreak from './LunchBreak';
import LessonMode from './LessonMode';
import DayFree from './DayFree';



const useStyles = makeStyles((theme) => ({
    gridContainer: {
      background: "#e6e6e6"
    },
    gridItem: {
      textAlign: 'center'
    },
    appBarSpacer: theme.mixins.toolbar,
  }));


export default function ParametersBar({setStartTime, setEndTime, setTimeBetween , setLunchBreak, setLessonMode, setDayFree}) {
    const classes = useStyles();
    function toggleLunch() {
        setLunchBreak(prev => !prev)
    }


    return (
        <>
        {/* <AppBar className={classes.appBar}> */}
          <Grid container spacing={1} className={classes.gridContainer}>
              <Grid item xs className={classes.gridItem}>
                <StartTime setStartTime={setStartTime}/>
                <EndTime setEndTime={setEndTime} />
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs className={classes.gridItem}>
                <TimeBetween setTimeBetween={setTimeBetween} />
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs className={classes.gridItem}>
                <LunchBreak setLunchBreak={setLunchBreak}/>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs className={classes.gridItem}>
                <LessonMode setLessonMode={setLessonMode}/>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs className={classes.gridItem}>
                <DayFree setDayFree={setDayFree}/>
              </Grid>
            </Grid>
        {/* </AppBar> */}
        {/* <div className={classes.appBarSpacer}></div> */}
    </>

    )
    // return (
    //     <table id="parameter">
    //         <th>
                // <label>Time:</label>
                // <select onChange={event => {setStartTime(event.target.value)}}>
                //     <option>--</option>
                //     <option value ="8" >8am</option>
                //     <option value ="9">9am</option>
                //     <option value="10">10am</option>
                //     <option value="11">11am</option>
                //     <option value="12">12pm</option>
                // </select>
                //  - 
                // <select onChange={event => {setEndTime(event.target.value)}}>
                //     <option>--</option>
                //     <option value="16">4pm</option>
                //     <option value="17">5pm</option>
                //     <option value="18">6pm</option>
                //     <option value="19">7pm</option>
                //     <option value="20">8pm</option>
                // </select>
    //         </th>
    //         <th>
                // <label>Gap between lessons:</label>
                // <input type="text" size="2" onChange={event => {setTimeBetween (event.target.value)}} />hrs
    //         </th>
    //         <th>
                // <label>Lunch break (12 - 2pm)</label>
                // <input type="checkbox" onChange={toggleLunch}/>
    //         </th>
    //         <th>
                // <label>Online or physical</label>
                // <select onChange={event => {setLessonMode(event.target.value)}}>
                //     <option>--</option>
                //     <option value="online">Online</option>
                //     <option value="f2f">Physical</option>
                //     <option value="both">Both</option>
                // </select>
    //         </th>
    //         <th>
                // <label>1 day free</label>
                //     <select onChange={event => {setDayFree(event.target.value)}}>
                //         <option>--</option>
                //         <option>Monday</option>
                //         <option>Tuesday</option>
                //         <option>Wednesday</option>
                //         <option>Thursday</option>
                //         <option>Friday</option>
                //     </select>
    //         </th>          
    //     </table>
    // )
}
