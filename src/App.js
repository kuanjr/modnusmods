
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/tutorial/TodoList'
import { v4 as uuidv4 } from 'uuid'
import "./App.css"
import SearchResult from './components/parameters/SearchResult'
import ModuleList from './components/parameters/ModuleList';
import Timetable from './components/timetable/Timetable';
import Parameters from './components/parameters/Parameters';
import EMPTY from "./components/timetable/empty.json"

 

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const [currentTime, setCurrentTime] = useState(0);
  const searchRef = useRef()
  const [searchTerm, setSearchTerm] = useState('');
  const [modules, setModules] = useState([])
  const [link, setLink] = useState('')
  const [timetableData, setTimetableData] = useState(EMPTY)
  const [possible, setPossible] = useState(true)
  

  //Parameters
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
    fetch('/time').then(res => res.json()).then(data => {setCurrentTime(data.time);});

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

  function addModules(module) {
    setModules(prevModules => {
      return [...prevModules, module]
    })
    setSearchTerm("")
    searchRef.current.value = ""
  }

  function clearModules() {
    setModules([]);
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
    parameters.modules = modules
    parameters.acadYear = "2021-2022"
    parameters.sem = "1"
    console.log(parameters);
    fetch('/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parameters)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.possible){
          setPossible(data.possible)
          setTimetableData(data.timetable_json)
          setLink(data.link)
        }
      });
  }

  return (
    <>
      {/* <div class="timetable"></div> */}
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div> */}
      {/* <p>Current time is: {currentTime}</p> */}
      <div className="parameters">
        <Parameters setStartTime={setStartTime} setEndTime={setEndTime} setTimeBetween={setTimeBetween} lunchBreak={lunchBreak} setLunchBreak={setLunchBreak} setLessonMode={setLessonMode} setDayFree={setDayFree}/>
      </div>
      <div className="modulesContainer">
        <div className="search">
          <input ref={searchRef} type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
          <SearchResult searchTerm={searchTerm} addModules={addModules} />
          <button onClick={generate}>Generate!</button>
          <button onClick={clearModules}>Clear all</button>
        </div>
        <div className="module">
          <ModuleList modules={modules} />
        </div>
      </div>
      <div className="timetable">
        <Timetable link={link} timetableData={timetableData} possible={possible}/>
      </div>
    </>
  )
}

export default App;