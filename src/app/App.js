import React from "react";
import Routes from './Routes';
import Contacts from './components/common/Contact';

import Header from "./components/common/Header"
 
export default class App extends React.Component {

    render() {
        console.log(this.props.children)
        return (
            <div>
                <h2>Welcome to React App</h2>
                <Header/>
            {this.props.children}
            
            </div>
            )
    }
}