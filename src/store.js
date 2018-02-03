import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './client/reducers/rootReducer';

export default createStore(rootReducer,applyMiddleware(reduxThunk));