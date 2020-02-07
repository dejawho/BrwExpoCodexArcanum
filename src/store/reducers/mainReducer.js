/* eslint-disable prettier/prettier */
import {SET_SPELL_SCHOOL, SET_EVOCATION_INFO, SET_ROOM_INFO} from '../actions/actionTypes';

const initialState = {
    spellSchool: null,
    evocationName: null,
    roomInfo: null,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SPELL_SCHOOL:
            return {
                ...state,
                spellSchool: action.spellSchool,
            };
        case SET_EVOCATION_INFO:
            return {
                ...state,
                evocationName: action.evocationName,
            };
        case SET_ROOM_INFO:
            return {
                ...state,
                roomInfo: action.roomInfo,
            };
        default:
            return state;
    }
};

export default mainReducer;
