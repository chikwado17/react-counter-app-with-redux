import { combineReducers } from 'redux';
import { counterReducer } from '../redux/counter/counterReducer';


const rootReducers = combineReducers({
    counter:counterReducer
});

export default rootReducers;