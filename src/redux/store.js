import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../../ReactotronConfig';
import appReducer from './reducers';


const store = createStore(appReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));

export default store;