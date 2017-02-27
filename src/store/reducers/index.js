/**
 * Created by Anonmous on 2/27/2017.
 */
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer} from './auth-reducer';

export default combineReducers({
    routing: routerReducer,
    auth: authReducer
});