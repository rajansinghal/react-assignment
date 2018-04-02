import * as ActionTypes from './ActionTypes';

const INITIAL_STATES = {
    states : [
        ],
    loading :false,
    error :false,
    errorMessage :''
}

export default function StateReducer(state= INITIAL_STATES, action){
    console.log("states reducer ", state, action);
    switch(action.type){

        case ActionTypes.INITIALIZE :
        console.log("i am in state reducer with "+action.payload.states)
        return Object.assign({},state,{states:action.payload.states})

        default:
        if(action.payload)
        console.log("i am in state reducer with default "+action.payload.states + "initial states"+INITIAL_STATES) 
        return state;
    }
}

