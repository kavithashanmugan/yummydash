
import { createStore, applyMiddleware } from 'redux'; 
import rootReducer from './rootReducer'; // Create this file

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;