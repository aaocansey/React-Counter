import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    handleIncreaseCounter = (e) => {
        e.preventDefault()
        this.setState({count: this.state.count + 1})
    }

    handleDecreaseCounter = (e) =>{
        e.preventDefault();
        this.setState({count: this.state.count - 1})
    }
    render() { 
        return ( 
            <>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleIncreaseCounter}>Increase</button>
                <button onClick={this.handleDecreaseCounter}>Decrease</button>
            </>
         );
    }
}
 
export default Counter;