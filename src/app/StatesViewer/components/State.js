
import React, {Component} from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default class State extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        let {state} = this.props;
        return (
            <tr>
                <td>{state.id}</td>
                <td>{state.code}</td>
                <td>{state.name}</td>
                <td> <NavLink to={`/stateView/${state.id}`}
                    className="button"
                    activeClassName ="success">
                    View
                </NavLink></td>
                
            </tr>
            
        )
    }
} 

const ViewState = ()=>{
console.log("View Working");
}

State.defaultProps = {
    
}

State.propTypes = {
    
}