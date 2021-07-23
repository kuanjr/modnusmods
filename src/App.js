
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import TodoList from './components/tutorial/TodoList'
import { v4 as uuidv4 } from 'uuid'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/bUTTON';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


import "./App.css"
import Timetable from './components/timetable/Timetable';
import ParametersBar from './components/inputcomponents/parameterbar/ParametersBar';
import UserModule from './components/inputcomponents/modulecontainer/UserModule';
import TimetableContainer from './components/timetable/TimetableContainer';
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
  const searchRef2 = useRef()
  const [searchTerm, setSearchTerm] = useState(["", ""]);
  const [modules, setModules] = useState([[],[]])
  const [colors, setColors] = useState([COLORS, COLORS])
  const [modulesCopy, setModulesCopy] = useState([])

  const [link, setLink] = useState(['', ''])
  const [timetableData, setTimetableData] = useState([EMPTY, EMPTY])
  const [possible, setPossible] = useState(true)
  // const userProps1 = {searchRef={searchRef}, setSearchTerm={setSearchTerm}, addModules={addModules}, searchTerm={searchTerm}, modules={modules}, removeModule={removeModule}}
  // const userProps2 = userProps1.add

  

  //inputcomponents
  const [startTime, setStartTime] = useState(8);
  const [endTime, setEndTime] = useState(20);
  const [timeBetween, setTimeBetween] = useState(0);
  const [lunchBreak, setLunchBreak] = useState(false);
  const [lessonMode, setLessonMode] = useState("both");
  const [dayFree, setDayFree] = useState('');
  const [user, setUser] = useState(1);





  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
    // console.log(backend)
    // fetch(backend + 'time').then(res => res.json()).then(data => {setCurrentTime(data.time); console.log(data.time)});
    fetch('/time').then(res => res.json()).then(data => {setCurrentTime(data.time); console.log(data.time)});

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

  function addModules(module, title, user) {
    user === 1 ? searchRef.current.value = "" : searchRef2.current.value = ""
    var tsearch = searchTerm.map(item => item)
    tsearch[user-1] = ""
    setSearchTerm(tsearch)
    const temp = modules[user-1]
    var exists = false
    for (var index = 0; index < temp.length; index++) {
      if (temp[index].modulecode === module) {
        exists = true
        return
      }
    }
    if (!exists) {
      var random = Math.floor((Math.random() * colors.length))
      var color = colors[user-1][random]
      // var tempcolor = colors.filter(item => item !== color)
      var tempcolor = colors[user-1].filter(item => item !== color)
      setColors(prevColors => {prevColors[user-1] = tempcolor; return prevColors})
      setModules(prevModules => {prevModules[user-1] = [...temp, {"modulecode": module, "title": title, "color": color}]; return prevModules})
      // console.log("modules: " + modules)
    }
  }

  // function addModules2(module, title) {
  //   setSearchTerm2("")
  //   searchRef2.current.value = ""
  //   const temp = modules2
  //   var exists = false
  //   for (var index = 0; index < temp.length; index++) {
  //     if (temp[index].modulecode === module) {
  //       exists = true
  //       return
  //     }
  //   }
  //   if (!exists) {
  //     var random = Math.floor((Math.random() * colors2.length))
  //     var color = colors2[random]
  //     var tempcolor = colors2.filter(item => item !== color)
  //     setColors2(tempcolor)
  //     setModules2([...temp, {"modulecode": module, "title": title, "color": color}])
  //   }
  // }

  function removeModule(e, user) {
    const color = modules[user-1].filter(item => item.modulecode === e.currentTarget.getAttribute('name'))[0].color
    // console.log(modules[user-1].filter(item => item.modulecode === e.currentTarget.getAttribute('name'))[0].color)
    const temp = modules[user-1].filter(item => item.modulecode !== e.currentTarget.getAttribute('name'))
    const prevModules = modules.map(item => item)
    const prevColors = colors.map(item => item)
    // setModules(prevModules => {prevModules[user-1] = temp; return prevModules})
    setModules(() => {prevModules[user-1] = temp; return prevModules})
    setColors(()=> {prevColors[user-1] = [...prevColors[user-1], color]; return prevColors})
  };

  // const removeModule2 = (e) => {
  //   const color = modules.filter(item => item.modulecode === e.currentTarget.getAttribute('name'))[0].color
  //   const temp = modules.filter(item => item.modulecode !== e.currentTarget.getAttribute('name'))
  //   setModules2(temp)
  //   setColors2(prevColors => [...prevColors, color])
  // };

  function clearModules() {
    setModules([[],[]]);
    setTimetableData([EMPTY, EMPTY])
    setColors([COLORS, COLORS])
  }

  function generate() {
    
    var parameters = {}
    parameters.startTime = startTime
    parameters.endTime = endTime
    parameters.timeBetween = timeBetween
    parameters.lunchBreak = lunchBreak
    parameters.lessonMode = lessonMode
    parameters.dayFree = dayFree
    parameters.modules = modules.map(modulelist => modulelist.map(module => module.modulecode))
    parameters.acadYear = "2021-2022"
    parameters.sem = "1"
    parameters.user = user
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
    // "https://modnusmods.herokuapp.com/post"
      // "homepage": "http://kuanjr.github.io/modnusmods",
    fetch("/post", {
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
          setPossible(data.possible)
          setTimetableData(data.timetable_json)
          setLink(data.link)
          console.log(timetableData)
        }
      });
  }
  

  return (
    <>
      <ParametersBar setStartTime={setStartTime} setEndTime={setEndTime} setTimeBetween={setTimeBetween} lunchBreak={lunchBreak} setLunchBreak={setLunchBreak} setLessonMode={setLessonMode} setDayFree={setDayFree}/>
      <UserModule user={user} setUser={setUser} searchRef={searchRef} searchRef2={searchRef2} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} modules={modules} removeModule={removeModule}/>
      {/* <ModuleContainer searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} generate={generate} clearModules={clearModules} modules={modules} removeModule={removeModule} /> */}
      {/* <ModuleContainer searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} generate={generate} clearModules={clearModules} modules={modules} removeModule={removeModule} /> */}
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
      {/* <Timetable user={1} link={link} timetableData={timetableData} possible={possible} modules={modules}/> */}
      <div className="timetable">
      <TimetableContainer user={user} link={link} timetableData={timetableData} possible={possible} modules={modulesCopy} />
      </div>
      {/* <TimetableContainer user={user} link={link} timetableData={timetableData} possible={possible} modules={modulesCopy} /> */}
      
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