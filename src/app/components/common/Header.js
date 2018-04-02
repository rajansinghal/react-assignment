
import React, {Component} from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
                <NavLink to="" 
                    exact 
                    className="button"
                    activeClassName="success">
                    Home
                    </NavLink>

                <NavLink to="/states"
                    className="button"
                    activeClassName ="success">
                    States
                </NavLink>

                <NavLink to="/cart"
                    className="button"
                    activeClassName ="success">
                    Cart
                </NavLink>

                <NavLink to="/contact"
                    className="button"
                    activeClassName ="success">
                    Contact
                </NavLink>

               
                
                    </div>
        )
    }
} 


Header.defaultProps = {
    
}

Header.propTypes = {
    
}