import React, { Component } from 'react';
import {Container , Nav, Navbar} from 'react-bootstrap';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Home from './Components/Home/Home';
import Form from "./Components/Form/Form";
import About from "./Components/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App  extends Component {

  render() { 
    return (
      <BrowserRouter>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/Form">Form</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          
  
        </Nav>
      </Container>
    </Navbar>
    <Routes>
    <Route path='/' element={<Home/>}> Home</Route>
        <Route path='/About' element={<About/>}> About</Route>
        <Route path='/Form' element={<Form/>}> Form</Route>
  </Routes>
    </BrowserRouter>
    );
  }
}
 

export default App ;


