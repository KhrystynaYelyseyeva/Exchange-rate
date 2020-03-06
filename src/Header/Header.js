import React, {Component} from 'react';
import './Header.css';
import img from '../logo.svg';
import Nav from './Nav/Nav';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="top-bar animate-dropdown"></div>
                <div className="main-header">
                    <div className="flex-container">
                        <div className="block-header flex-item">
                            <img src={img} alt="logo" width="100px"/>
                        </div>
                        <div className="block-header flex-item">
                            <span>Exchange</span>
                        </div>
                    </div>
                </div>
                <Nav/>
            </header>
        );
    }
}

export default Header;
