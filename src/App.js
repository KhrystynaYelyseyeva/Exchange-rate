import React, {Component} from 'react';
import './App.css';

import Header from './Header/Header';
import Rate from "./Rate/Rate";
import About from "./Header/Nav/About/About";
import Contacts from "./Header/Nav/Contacts/Contacts";
import Footer from "./Footer/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <main>
                        <Router>
                            <Switch>
                                <Route exact path={"/"} component={Rate}/>
                                <Route exact path={"/about"} component={About}/>
                                <Route exact path={"/contacts"} component={Contacts}/>
                            </Switch>
                        </Router>

                    </main>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
