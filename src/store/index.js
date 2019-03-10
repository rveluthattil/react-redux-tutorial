import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
//import storyReducer from '../reducers/story';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger();
const saga = createSagaMiddleware();

//const store = createStore(storyReducer);
// The second parameter is mentioned as undefined because it is usually used for the initial state
// of the redux store but since we have handled the initial state of the reducers we are not defining 
// it here. 
const store = createStore(rootReducer, undefined, applyMiddleware(saga,logger));

saga.run(rootSaga);

export default store;