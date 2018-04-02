import React, {Component} from "react";
import PropTypes from "prop-types";
import State from './State'

export default class StateList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log("in componentDidMount going to get the states")
        this.props.actions.fetchStates();
    }
    
    render() {
        if (this.props.loading) {
            return (
                <h2>States loading ...</h2>
            );
        }

        if (this.props.error) {
            return (
                <h2> Error loading states {this.props.errorMessage} </h2>
            )
        }
        return (
            <div> 
            <h2>StateList</h2>
            <table>
                <tbody>
                <tr>
                        <td>ID</td>
                        <td>Code</td>
                        <td>Name</td>
                        <td>View</td>
                        <td>Edit</td>
                </tr>
               
                {
                    this.props.states.map(state=>(
                        <State key={state.id} state={state}/>
                    ))
                }

                </tbody>
            </table>
            </div>
        )
    }
}


StateList.defaultProps = {
    states : [
        ],
    loading :false,
    error :false,
    errorMessage :''
}

StateList.propTypes = {
    
}