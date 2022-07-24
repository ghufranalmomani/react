import React, { Component } from 'react';


class Home  extends Component {
 
    render() { 
        return (
            <div>
         <h1>Your Name is :{this.props.Name}</h1>
         <h1>Your Name is :{this.props.Email}</h1>
         <h1>Your Name is :{this.props.Password}</h1>
         </div>
        );
    }
}
 
export default Home;
