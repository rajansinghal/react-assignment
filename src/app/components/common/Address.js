
import React, {Component} from "react";
import PropTypes from "prop-types";

export default function Address (props) {
        let address = props.address;
        return (
            <div> 
            <h4>{address.type}</h4>
            <h5>Street : {address.street}</h5>
            <h5>Pincode : {address.pincode}</h5>
            <h5>City : {address.city}</h5>
            <h5>Phone : {address.phone}</h5>
            </div>
        )
}



Address.defaultProps = {
  
}

Address.propTypes = {
    
}