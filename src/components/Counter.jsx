import React from 'react'




class Counter extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="ui segment">
                <h1>Counter - {0}</h1>

                <button className="ui primary button">Increment</button>
                <button className="ui red button">Reset</button>
                <button className="ui primary button">Decrement</button>
            </div>
         );
    }
}
 
export default Counter;