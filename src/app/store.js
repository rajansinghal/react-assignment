import {createStore,
    combineReducers,
    applyMiddleware} from 'redux';
import cartReducer from './cart/state/reducers';
import thunk from "redux-thunk";
import StateReducer from "./StatesViewer/state/reducer";
import StateViewReducer from "./StatesViewer/state/StateViewReducer"


let rootReducer = combineReducers({
    cart:cartReducer,
    stateList: StateReducer,
    stateView: StateViewReducer
})

let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
