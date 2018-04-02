
import React, {Component} from "react";
import PropTypes from "prop-types";
import Address from "./Address";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
       
    }
    
    render() {
        return (
            <div> 
            <Address address={{"type":"Head Office", "street":"Netherland","pincode":"123123", "city":"Netherland", "phone":"+31-32453454" }}/>
            <Address address={{"type":"Branch Office", "street":"Park-Centra","pincode":"122001", "city":"Gurgaon", "phone":"+91-923932332" }}/>
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}