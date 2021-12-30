import React from 'react'
import Navbar from './taskLists';

function DisplayTask({ task }) {
    if (!task || task.length === 0) {
      return <p>No List yet</p>;
    } 
  return (
    <div className="DisplayList">
        {task.map((item) => (
               <Navbar key={item.id} item={item} />
            ))} 
    </div>
  );
}

export default DisplayTask
