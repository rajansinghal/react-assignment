
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class StateView extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
       
        this.props.actions.viewState(this.props.match.params.id);
    }
    
    render() {
        console.log("Inside StateView"+ this.props.state)
       
        return (
            <div> 
           <li> 
               <ul>ID : {this.props.state.id}</ul>
               <ul>Code : {this.props.state.code}</ul>
               <ul>Name : {this.props.state.name}</ul>
           </li>
            </div>
        )
    }
} 


StateView.defaultProps = {
    
}

StateView.propTypes = {
    
}