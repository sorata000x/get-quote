import React, { Component } from "react";

export class QuoteAdder extends Component {
    constructor(props) {
        super(props);
        this.state = { newItemText: ""}
    }

    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value })
    }

    addNewQuote = () => {
        this.props.callback(this.state.newItemText);
        this.setState({ newItemText: ""});
    }

    render = () =>
        <div>
            <input value={ this.state.newItemText } onChange={ this.updateNewTextValue }/>
            <button onClick={ this.addNewQuote }> Add </button>
        </div>
}