import React, { useState } from 'react';
import "./App.css";

function App1() {
const [result , disList] = useState('');
  const person = ['bahaa', 'aya', 'dyar', 'ghufran', 'obada', 'anas', 'raghad', 'tamara', 'ibrahim','marwa','roaa'];
  
  return (
    <div className='App1'>
      <input type='text' id='sfilter' onChange= {(event)  => {disList(event.target.value)}}/>
      {person.filter(name1=>name1.includes(result)).map(filteredName=>(
         <li>
          {filteredName}
        </li>
      ))}
      
    </div>

  );
}


export default App1;