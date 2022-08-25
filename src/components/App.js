import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  let clock = new Date().toLocaleString();
  let [time,settime] = useState(clock);
  function digital(){
    clock = new Date().toLocaleString();
    settime(clock)
  }

  setInterval(digital,1000)
  return (
    <div id="main">
      <div className="date-time">{time}</div>
    </div>
  )
}


export default App;
