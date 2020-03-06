import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title"><a href="https://itgid.info">2019 &copy; React. Lite
                                    Level</a></h1>
                                <p> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        );
    }
}

export default Footer;
