import * as ActionTypes from "./ActionTypes";
import * as service from "./service"

export function initStates(states){
    return {
        type: ActionTypes.INITIALIZE,
        payload:{
            states : states
        }
    }
}
export function loadState(state){
    return {
        type: ActionTypes.GET_STATE,
        payload:{
            state : state
        }
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}


export function initError(error) {
    return {
        type: ActionTypes.INIT_ERROR,
        payload: {
            error: error
        }
    }
}

export function fetchStates() {
    //thunk shall pass the dispatch
    return function(dispatch, getState) {

        //no error
        dispatch(initError(false));
        dispatch(loading(true));

        return service.getStates()
        .then ( states => {
            console.log("in fetchStates going to dispath the action initStates")
            //keep the data in redux
            
            dispatch(initStates(states));
            dispatch(loading(false));
          
            return states; //useful for mock testing
        })
        .catch ( error => {
            dispatch(loading(false));
            dispatch(initError(error.toString()));
        })
    }
}

export function viewState(id){
    console.log("@###########"+id)
    return function(dispatch) {

        //no error
        dispatch(initError(false));
        dispatch(loading(true));

        return service.getState(id)
        .then ( state => {
            console.log("state arrived as state"+state)
            //keep the data in redux
            
            dispatch(loadState(state));
            //dispatch(loading(false));
          
            return states; //useful for mock testing
        })
        .catch ( error => {
            //dispatch(loading(false));
            //dispatch(initError(error.toString()));
        })
    }
}

