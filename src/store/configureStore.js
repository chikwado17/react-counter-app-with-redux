import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers/rootReducers';


export const configureStore = () => {

    const middleware = [];

    const store = createStore(
        rootReducers,
        composeWithDevTools(applyMiddleware(...middleware))
    );

    return store;
}