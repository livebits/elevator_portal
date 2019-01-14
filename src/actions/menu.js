import * as types from '../constants/types';

export const setMenus = (menus) => ({
    type: types.SET_MENUS,
    menus: menus,
});

export const setMenusIds = (menus) => ({
    type: types.SET_MENUS_IDs,
    menus: menus,
});

export const setMenusActionsIds = (actions) => ({
    type: types.SET_MENUS_ACTIONS_IDs,
    actions: actions,
});