import React, { Component } from 'react';


class Form extends Component {
  constructor (props){
  super(props);

  this.state= {
    UserName: "",
    Email:"",
    Password:""



};
this.handleChange= this.handleChange.bind(this);
    this.handleChangeEmail= this.handleChangeEmail.bind(this);
    this.handleChangepassword= this.handleChangepassword.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);

}

    
handleChange(event){
  
    this.setState({ UserName:event.target.value  });

}

  
handleChangeEmail(event){
  
    this.setState({ Email:event.target.value  });

}

  
handleChangepassword(event){
  
    this.setState({ Password:event.target.value  });

}

handleSubmit(event){
event.preventDefault();
alert(this.state.UserName , this.state.Email , this.state.Password);

}
    render() {
        
        return (

<form>
  
    User Name:
   <input type="text"name='UserName' onChange={this.
    handleChange} /><br></br><br></br>
   Email:
   <input type="email" onChange={this.
    handleChangeEmail}/><br></br><br></br>
   Password
   <input type="password" onChange={this.
    handleChangepassword}/><br></br><br></br>
   <input type="submit" onClick={this.handleSubmit} />

</form>


        );
    }
}
 
export default Form ;