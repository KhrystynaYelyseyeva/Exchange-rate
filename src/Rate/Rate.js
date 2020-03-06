import React, {Component} from 'react';
import './Rate.css';

import Calc from "./Calc/Calc"

class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            currencyRate: {},
        };
        this.currency = ['USD', 'PLN', 'CAD', 'GBP'];
        this.getRates();
    }

    getRates = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => data.json())
            .then(data => {
                this.setState({date: data.date})

                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }
                this.setState({currencyRate: result});
            });
    }

    render() {
        return (
            <div className="Rate">
                <h3>Exchange rates for {this.state.date}</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currencyRate).map(currencyName => (
                        <div className="block flex-item" key={currencyName}>
                            <div className="currency-name">{currencyName}</div>
                            <div className="currency-in">{this.state.currencyRate[currencyName].toFixed(2)}*</div>
                            <p className="currency-out">can be bought for one euro*</p>
                        </div>
                    ))}
                </div>
                <Calc rate={this.state.currencyRate}/>
            </div>
        );
    }
}

export default Rate;
