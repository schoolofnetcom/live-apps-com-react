import React, { Component } from 'react';
import logo from './../../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <img src={logo} alt="logo"/>
                <h2>
                    Todo - SON
                </h2>
            </nav>
        );
    }
}