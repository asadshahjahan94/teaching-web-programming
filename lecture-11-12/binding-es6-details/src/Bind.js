import React, { Component } from "react";

class Bind extends Component {
    constructor(props) {
    super(props)

    this.state = {
        jsClicks: 0,
        esClick: 0
    }

    // this.jsOnClick = this.jsOnClick.bind(this)
    }

    jsOnClick = function jsOnClickfun() {
        this.setState({jsClicks: this.state.jsClicks + 1})
        console.log(this.state.jsClicks)
    }

    es6Click = () => {
        this.setState({esClick: this.state.esClick + 1})
        console.log(this.state.esClick)
    }

    render = () => {
        return (
            <div>
                <h3>Binding</h3>
                <button className="btn btn-success" onClick={this.es6Click}>ES6</button>
                <button className="btn btn-success" onClick={this.jsOnClick} style={{marginLeft: "10px"}}>JS</button>
                <button className="btn btn-warning" onClick={() => this.props.setTitle("Reset by Bind Component")} style={{marginLeft: "10px"}}>Reset</button>
            </div>
        )
    }
}

export default Bind
