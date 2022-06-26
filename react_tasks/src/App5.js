import React, { Component } from 'react';


 

class App5 extends Component {

    constructor ()
    {
        super ()
        this.state={

             
     visible : 'block',
     color : 'pink'
        }
    }


    Change_visiblity = () =>
    {
        if (this.state.visible === 'block') {
            this.setState
            ({
            visible : 'none'

            })
    
            
        } else {
            this.setState
            ({
visible : 'block'
            })
    
    
            
            
        }
    
    
    }
     Change_color = () =>
    {
        if (this.state.color === 'pink') {
            this.setState
            ({
color : 'black'
            })
    
    
            
            
        } else {
    
            this.setState
            ({
color : 'pink'
            })
    
            
            
        }
    
    }
  

    render() { 
        return (
            
            <p>
             <button onClick={this.Change_visiblity}> Hide Text</button>   <button onClick={this.Change_color}>Change Color</button>
               <h3 style={{color:this.state.color,display:this.state.visible }}>
                There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are 
                  </h3>
                  
            </p>
        );
    }
}
 
export default App5;