import React from 'react'
import TimeColumn from './TimeColumn'
import TimeRow from './TimeRow'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	timetable: {
		background: "grey",
		minWidth: 1080,
		margin: "auto"
	},
	tablerow: {
		border: "solid",
		borderColor: "#e6e6e6",
		borderWidth: 1,
		// borderWidth: 1.5
	},
	tablecell: {
		borderRight: "solid #e6e6e6",
		borderWidth: 1,
		// borderColor: "#e6e6e6"
	}
  }));

export default function Timetable({link, timetableData, possible, modules}) {
	const classes = useStyles();
    var rows = []
    for (var i = 8; i < 20; i++) {
        rows.push(<TimeColumn time={i} />)
    }

	if (!possible && link === "") {
		var impossible = <p id="impossible">We couldn't find a timetable for you :( <br/> Try changing your parameters</p>
	}

    // var Tue = []
    // for (i = 0; i < 26; i++) {
    //     Tue.push(<TimeCell />)
    // }
    // var Wed = []
    // for (i = 0; i < 26; i++) {
    //     Wed.push(<TimeCell />)
    // }
    // var Thur = []
    // for (i = 0; i < 26; i++) {
    //     Thur.push(<TimeCell />)
    // }
    // var Fri = []
    // for (i = 0; i < 26; i++) {
    //     Fri.push(<TimeCell />)
    // }
    // console.log(rows)
    return (
    <div className="timetable">
		{impossible}
        {/* <table id="timtable">
			<tr>
                <th colSpan={2}></th>
                {rows.map(row => row)}
            </tr>
            <tr>
                <TimeRow day={"Mon"} schedule={timetableData[0]} />
            </tr>
            <tr>
                <TimeRow day={"Tue"} schedule={timetableData[1]} />
            </tr>
            <tr>
                <TimeRow day={"Wed"} schedule={timetableData[2]} />
            </tr>
            <tr>
                <TimeRow day={"Thur"} schedule={timetableData[3]} />
            </tr>
            <tr>
				<TimeRow day={"Fri"} schedule={timetableData[4]} />
            </tr>
        </table> */}
		 <TableContainer component={Paper} className={classes.timetable}>
			<Table>
				<TableHead>
					<TableRow className={classes.tablerow}>
						<TableCell colSpan={2} className={classes.tablecell} />
						{rows.map(row => row)}
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow className={classes.tablerow}>
						<TimeRow day={"Mon"} schedule={timetableData[0]} modules={modules}/>
					</TableRow>
					<TableRow className={classes.tablerow}>
						<TimeRow day={"Tue"} schedule={timetableData[1]} modules={modules}/>						
					</TableRow>
					<TableRow className={classes.tablerow}>
						<TimeRow day={"Wed"} schedule={timetableData[2]} modules={modules}/>						
					</TableRow>
					<TableRow className={classes.tablerow}>
						<TimeRow day={"Thur"} schedule={timetableData[3]} modules={modules}/>					
					</TableRow>
					<TableRow className={classes.tablerow}>
						<TimeRow day={"Fri"} schedule={timetableData[4]} modules={modules}/>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
		<div id="timetablelink">
			<br/>
			<a  href={link} target="_blank">{link}</a>
		</div>
	{/* <table border="5" cellspacing="0" align="center">
		
		<tr>
			<td align="center" height="50" width="100">
				<b>Day/Period</b>
			</td>
			<td align="center" height="50" width="100">
				<b>I9:30-10:20</b>
			</td>
			<td align="center" height="50" width="100">
				<b>II10:20-11:10</b>
			</td>
			<td align="center" height="50" width="100">
				<b>III11:10-12:00</b>
			</td>
			<td align="center" height="50" width="100">
				<b>12:00-12:40</b>
			</td>
			<td align="center" height="50" width="100">
				<b>IV12:40-1:30</b>
			</td>
			<td align="center" height="50" width="100">
				<b>V1:30-2:20</b>
			</td>
			<td align="center" height="50" width="100">
				<b>VI2:20-3:10</b>
			</td>
			<td align="center" height="50" width="100">
				<b>VII3:10-4:00</b>
			</td>
		</tr>
		<tr>
			<td align="center" height="50"><b>Monday</b></td>
			<td align="center" height="50">Eng</td>
			<td align="center" height="50">Mat</td>
			<td align="center" height="50">Che</td>
			<td rowspan="6" align="center" height="50"><h2>LUNCH</h2>
			</td>
			<td colspan="3" align="center" height="50">LAB</td>
			<td align="center" height="50">Phy</td>
            
		</tr>
		<tr>
			<td align="center" height="50">
				<b>Tuesday</b>
			</td>
			<td colspan="3" align="center"
				height="50">LAB
			</td>
			<td align="center" height="50">Eng</td>
			<td align="center" height="50">Che</td>
			<td align="center" height="50">Mat</td>
			<td align="center" height="50">SPORTS</td>
		</tr>
		<tr>
			<td align="center" height="50">
				<b>Wednesday</b>
			</td>
			<td align="center" height="50">Mat</td>
			<td align="center" height="50">phy</td>
			<td align="center" height="50">Eng</td>
			<td align="center" height="50">Che</td>
			<td colspan="3" align="center"
				height="50">LIBRARY
			</td>
		</tr>
		<tr>
			<td align="center" height="50">
				<b>Thursday</b>
			</td>
			<td align="center" height="50">Phy</td>
			<td align="center" height="50">Eng</td>
			<td align="center" height="50">Che</td>
			<td colspan="3" align="center"
				height="50">LAB
			</td>
			<td align="center" height="50">Mat</td>
		</tr>
		<tr>
			<td align="center" height="50">
				<b>Friday</b>
			</td>
			<td colspan="3" align="center"
				height="50">LAB
			</td>
			<td align="center" height="50">Mat</td>
			<td align="center" height="50">Che</td>
			<td align="center" height="50">Eng</td>
			<td align="center" height="50">Phy</td>
		</tr>
	</table> */}
    </div>
    )
}
