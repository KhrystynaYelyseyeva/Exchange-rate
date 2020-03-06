import React, {Component} from 'react';
import './Calc.css';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
        }

    }

    static getDerivedStateFromProps(props, state) {
        return {rate: props.rate};
    }


    calcRate = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let currencyNum = elements["num-currency"].value;
        let currencyText = elements["text-currency"].value;
        this.setState({result: (currencyNum/this.state.rate[currencyText]).toFixed(2)});
    }

    render() {
        return (
            <div className="Calc">
                <h3>Exchange calculator</h3>

                <div className="block">
                    <div>
                        <div>I want to buy</div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" defaultValue="100" name="num-currency"/>
                            <select name="text-currency">
                                {Object.keys(this.props.rate).map(key => (
                                    <option key={key} value={key}>{key}</option>
                                ))}
                            </select>
                            <input type="submit" defaultValue="calc"/>
                        </form>

                    </div>
                    <div>
                        <h4>Result</h4>
                        <ul className="calc-res">
                            <li> EUR {this.state.result} </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;
