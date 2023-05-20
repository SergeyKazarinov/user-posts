import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({

});
const configureStore = () => createStore(reducer, composeWithDevTools(applyMiddleware()));

const store = configureStore({});

export default store;
