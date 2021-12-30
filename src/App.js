import React from 'react';
import { useState } from 'react';
import './App.css';
import Tasks from "./data/TaskList";
import DisplayTask from './components/DisplayTask';


function App() {
  const headerStyles=({
      backgroundColor: "#ccc",
      color:"black",
  })
  const [lists, setList] = useState(Tasks);

  return (
    <div className="toDoList" style={headerStyles}>
      <h1>This is to do list</h1>
      <DisplayTask task={lists} />
    </div>
  );
}

export default App;
