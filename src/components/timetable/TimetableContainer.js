import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Timetable from './Timetable';
import { useState } from 'react';
import { Paper } from '@material-ui/core';


export default function TimetableContainer( {user, link, timetableData, possible, modules}) {
    const [userTimetable, setUserTimetable] = useState(0)
    function handleOnChange(e, newValue) {
        setUserTimetable(newValue)
    }

    function TabPanel(props) {
        const {children, value, index} = props
        return (
            <>
              {value === index && children}
            </>
        )
    }

    if (user === 1) {
        return (<Timetable user={user} link={link} timetableData={timetableData} possible={possible} modules={modules}/>)
    } else {
        return (
          <>
            <Tabs value={userTimetable} onChange={handleOnChange} TabIndicatorProps={{style: {display: "none"}}}>
              <Tab label="User 1" style={{backgroundColor: "grey"}} />
              <Tab label="User 2" style={{backgroundColor: "grey"}}/>
            </Tabs>
            <TabPanel value={userTimetable} index={0}>
                <Timetable user={1} link={link} timetableData={timetableData} possible={possible} modules={modules}/>
              </TabPanel>
              <TabPanel value={userTimetable} index={1}>
                <Timetable user={2} link={link} timetableData={timetableData} possible={possible} modules={modules}/>
              </TabPanel>
          </>
        )
    }
}
