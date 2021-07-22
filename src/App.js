
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import TodoList from './components/tutorial/TodoList'
import { v4 as uuidv4 } from 'uuid'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/bUTTON';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import "./App.css"
import Timetable from './components/timetable/Timetable';
import ParametersBar from './components/inputcomponents/parameterbar/ParametersBar';
import ModuleContainer from './components/inputcomponents/modulecontainer/ModuleContainer';
import EMPTY from "./components/timetable/empty.json"



 

const LOCAL_STORAGE_KEY = 'todoApp.todos'
const backend = "https://modnusmods.herokuapp.com/"

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    justifyContent: "center"
  },
  indivbuttons: {
    textAlign: "center"
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#324376"
    }
  },
});

const COLORS = ["#cc99ff",
                "#99ccff",
                "#ffcce6",
                "#ffcc66",
                "#99ff66",
                "#0099ff",
                "#ff4d4d",
                "#ff99ff",
                "#996633"] 


function App() {
  const classes = useStyles()
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const [currentTime, setCurrentTime] = useState(0);
  const searchRef = useRef()
  const [searchTerm, setSearchTerm] = useState('');
  const [modules, setModules] = useState([])
  const [modulesCopy, setModulesCopy] = useState([])
  const [link, setLink] = useState('')
  const [timetableData, setTimetableData] = useState(EMPTY)
  const [possible, setPossible] = useState(true)
  const [colors, setColors] = useState(COLORS)

  

  //inputcomponents
  const [startTime, setStartTime] = useState(8);
  const [endTime, setEndTime] = useState(20);
  const [timeBetween, setTimeBetween] = useState(0);
  const [lunchBreak, setLunchBreak] = useState(false);
  const [lessonMode, setLessonMode] = useState("both");
  const [dayFree, setDayFree] = useState('');





  useEffect(() => {
    // const css = document.createElement('link');
    // css.href = "/timetable/styles";
    // css.rel = "stylesheet";

    // document.head.appendChild(css);


    // const script = document.createElement('script');
    // script.src = "timetable/scripts/timetablerender.js"
    // script.async = true;

    // document.body.appendChild(script);

    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
    // console.log(backend)
    // fetch(backend + 'time').then(res => res.json()).then(data => {setCurrentTime(data.time); console.log(data.time)});
    // fetch('/time').then(res => res.json()).then(data => {setCurrentTime(data.time); console.log(data.time)});

  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function addModules(module, title) {
    setSearchTerm("")
    searchRef.current.value = ""
    const temp = modules
    var exists = false
    for (var index = 0; index < temp.length; index++) {
      if (temp[index].modulecode === module) {
        exists = true
        return
      }
    }
    if (!exists) {
      var random = Math.floor((Math.random() * colors.length))
      var color = colors[random]
      var tempcolor = colors.filter(item => item !== color)
      setColors(tempcolor)
      setModules([...temp, {"modulecode": module, "title": title, "color": color}])
    }

  }

  const removeModule = (e) => {
    const color = modules.filter(item => item.modulecode === e.currentTarget.getAttribute('name'))[0].color
    const temp = modules.filter(item => item.modulecode !== e.currentTarget.getAttribute('name'))
    setModules(temp)
    setColors(prevColors => [...prevColors, color])
  };

  function clearModules() {
    setModules([]);
    setTimetableData(EMPTY)
    setColors(COLORS)
  }

  function generate() {
    setPossible(false)
    setTimetableData(EMPTY)
    setLink("")
    var parameters = {}
    parameters.startTime = startTime
    parameters.endTime = endTime
    parameters.timeBetween = timeBetween
    parameters.lunchBreak = lunchBreak
    parameters.lessonMode = lessonMode
    parameters.dayFree = dayFree
    parameters.modules = modules.map(module => module.modulecode)
    parameters.acadYear = "2021-2022"
    parameters.sem = "1"
    console.log(parameters);
    // fetch(backend+'post', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(parameters)
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     if (data.possible){
    //       setPossible(data.possible)
    //       setTimetableData(data.timetable_json)
    //       setLink(data.link)
    //     }
    //   });
    fetch("https://modnusmods.herokuapp.com/post", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parameters)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.possible){
          var temp = modules.map(item => item)
          setModulesCopy(temp)
          console.log(temp)
          setPossible(data.possible)
          setTimetableData(data.timetable_json)
          setLink(data.link)

        }
      });
  }
  function NumberOfUsers({number}) {
    if (number === 1) {
      const useStyles = makeStyles((theme) => ({
        root: {
          height: 400,
          paddingLeft: 20,
          paddingTop: 50,
          paddingBottom: 20,
        },
      }));
      return <ModuleContainer searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} generate={generate} clearModules={clearModules} modules={modules} removeModule={removeModule} style={useStyles}/>
    } else {
      const useStyles = makeStyles((theme) => ({
        root: {
          height: 200,
          paddingLeft: 20,
          paddingTop: 20,
          paddingBottom: 20,
        },
      }));
      return (
        <>
          <ModuleContainer searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} generate={generate} clearModules={clearModules} modules={modules} removeModule={removeModule} style={useStyles}/>
          <Divider flexItem />
          <ModuleContainer searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} generate={generate} clearModules={clearModules} modules={modules} removeModule={removeModule} style={useStyles}/>
        </>
  
      )
    }
  }

  return (
    <>
      <ParametersBar setStartTime={setStartTime} setEndTime={setEndTime} setTimeBetween={setTimeBetween} lunchBreak={lunchBreak} setLunchBreak={setLunchBreak} setLessonMode={setLessonMode} setDayFree={setDayFree}/>
      {/* <NumberOfUsers number={1} /> */}
      <ModuleContainer searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} generate={generate} clearModules={clearModules} modules={modules} removeModule={removeModule} />
      <Grid container spacing={2} className={classes.buttonContainer}>
        <Grid item xs={3} className={classes.indivbuttons}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={generate}>
              GENERATE
            </Button>
          </ThemeProvider>
       </Grid>
        <Grid item xs={3} className={classes.indivbuttons}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={clearModules}>
              CLEAR ALL
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Timetable link={link} timetableData={timetableData} possible={possible} modules={modulesCopy}/>
      {/* <div class="timetable"></div> */}
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div> */}
      {/* <p>Current time is: {currentTime}</p> */}
    </>
  )
}

export default App;