import authReducer from '../reducers/authReducer';
import {combineReducers} from 'redux';
import {CLEAR_REDUX_DATA} from '../actions/ActionTypes';
import homeReducer from './homeReducer'

const rootReducer = combineReducers({auth: authReducer, home: homeReducer});

const appReducer = (state, action) => {
    if (action.type === CLEAR_REDUX_DATA) {
        return rootReducer(undefined, action);
    } 

    return rootReducer(state, action);
};

export default appReducer;