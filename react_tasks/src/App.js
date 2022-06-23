import React , {Component} from 'react';
import Team from "./Team";
import Counter from "./Counter";
import './App.css';
import App1 from "./App1";
import App2 from "./App2";
class App extends Component{
    render(){
return(
  <>
  <div>
  <Counter />
  </div>
  <br></br>
  <div>
  <App1/>
  </div>
  <div>
    <App2/>
  </div>
<div className='container'>
<Team name='Ghufran' lorem='lorem ipsum is great text' likes='1998' />
<Team name='Sara' lorem='lorem ipsum is great text' likes='1999' />
<Team name='Marwa' lorem='lorem ipsum is great text' likes='1998' />
<Team name='Aya' lorem='lorem ipsum is great text' likes='1998' />
</div>
</>
);
  };
};

export default App;



