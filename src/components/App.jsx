import React, { Component } from 'react';
import Counter from './Counter';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{marginTop:'90px'}} className="ui container">
                <Counter />
            </div>
         );
    }
}
 
export default App;