import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../state/actions'

import StateList from "../components/StateList"

const mapStateToProps = (state) =>{
    return {
        states : state.stateList.states
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        actions : bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (StateList)