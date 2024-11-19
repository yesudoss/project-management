import * as ActionTypes from './ActionTypes';

const initialState = {
    open: true,
    fixedMenu: false,
};

const MenuReducer = function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.MOBILE_MENU:
            return {
                ...state,
                isMobile: action.payload
            }
        case ActionTypes.FIXED_MENU_OPEN:
            return {
                ...state,
                open: true,
                fixedMenu: true
            };
        case ActionTypes.FIXED_MENU_CLOSE:
            return {
                ...state,
                open: false,
                fixedMenu: false
            };
        case ActionTypes.OPEN_MENU:
            return {
                ...state,
                open: true
            };
        case ActionTypes.CLOSE_MENU:
            return {
                ...state,
                open: false
            };
        default:
            return state;
    }
}

export default MenuReducer;