import { combineReducers } from 'redux';
import * as types from '../constants/types';

const preState = {
    menus: [],
    menusIds: [],
    menusActionsIds: []
};
function menus(state = preState.menus, action) {
    switch (action.type) {
        case types.SET_MENUS:
            return action.menus;
        default:
            return state
    }
}

function menusIds(state = preState.menusIds, action) {
    switch (action.type) {
        case types.SET_MENUS_IDs:
            return action.menus;
        default:
            return state
    }
}

function menusActionsIds(state = preState.menusActionsIds, action) {
    switch (action.type) {
        case types.SET_MENUS_ACTIONS_IDs:
            return action.actions;
        default:
            return state
    }
}



export default combineReducers({
    menus,
    menusIds,
    menusActionsIds
});