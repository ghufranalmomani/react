import React from 'react';
import axios from 'axios';

function Create() {
    

  const  create = ()=>{
    axios.get("http://localhost/server/create.php")
    
    }
    
  return (
    <div>

        <button onClick={create}>create data</button>
      
    </div>
  )
}

export default Create;