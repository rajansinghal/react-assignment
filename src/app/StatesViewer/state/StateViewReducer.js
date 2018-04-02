import * as ActionTypes from './ActionTypes';
import { debug } from 'util';

const INITIAL_STATES = {
    state :{}
    ,
    loading :false,
    error :false,
    errorMessage :''
}

export default function StateViewReducer (state = INITIAL_STATES, action){
    console.log("state reducer ", action);
    switch(action.type){
        case ActionTypes.GET_STATE:
        return Object.assign({},state,{state:action.payload.state})
        default:
        return state;
    }
}