import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, resetCount, decrementCount } from '../redux/counter/counterAction';

const mapStateToProps = (state) => ({
    counter: state.counter.count
});

const mapDispatchToProps = {
    incrementCount,
    resetCount,
    decrementCount
}

class Counter extends React.Component {


    handleIncrementCouunt = () => {
        this.props.incrementCount()
    };

    handleResetCount = () => {
        this.props.resetCount()
    };

    handleDecrementCount = () => {
        this.props.decrementCount()
    };


    render() { 
        const { counter } = this.props;
        return ( 
            <div className="ui segment">
                <h1>Counter : {counter}</h1>

                <button onClick={this.handleIncrementCouunt} className="ui primary button">Increment</button>
                <button onClick={this.handleResetCount} className="ui red button">Reset</button>
                <button onClick={this.handleDecrementCount} className="ui primary button">Decrement</button>
            </div>
         );
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Counter);