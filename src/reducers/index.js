import {combineReducers} from 'redux';
import * as types from '../constants/types';

import menu from "./menu";
import factor from "./factor";


const appReducer = combineReducers({
    menu,
    factor,
});

const rootReducer = (state, action) => {

    return appReducer(state, action);
};

export default rootReducer;