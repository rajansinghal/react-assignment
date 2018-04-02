import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../state/actions'

import StateView from "../components/StateView"

const mapStateToProps = (state) =>{
    console.log("mapStateToProps"+ state)
    return {
        state : state.stateView.state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        actions : bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (StateView)