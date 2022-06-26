
import React, { Component } from 'react';

class App4 extends Component {
    constructor ()
    {
        super ()
        this.state={

            numbers:[ 5 , -2 , 23 , 7 , 87 , -42 , 509]  
        }
    }
    render() { 
        return (
            <div>
           
            <ul>

                {this.state.numbers.sort((a,b)=>(a-b)).map((number )=>(
                <li > {number}</li>
                )
                )}
            </ul>
</div>
        );
    }
}
 
export default App4;