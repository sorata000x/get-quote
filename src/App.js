import React, { Component } from "react";
import { QuoteRow } from "./QuoteRow";
import { QuoteAdder } from "./QuoteAdder";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteItems: [],
            randomQuote: "",
        }
    }

    addNewQuote = (quote) => {
        if (!this.state.quoteItems.find(item => item === quote)) {   // if quote not already exist
            this.setState({
                quoteItems: [...this.state.quoteItems, quote],   // add new quote
            }, () => localStorage.setItem("quote", JSON.stringify(this.state)));
        }
    }

    deleteQuote = (quote) => {
        this.setState((prevState) => ({
            quoteItems: prevState.quoteItems.filter(item => item !== quote)     // filter out deleting quote
        }))
    }

    componentDidMount = () => {     // mount data from local storage
        let data = localStorage.getItem("quote");
        if (data != null) {this.setState(JSON.parse(data))}
    }

    quoteRows = () => this.state.quoteItems.map(item =>
    <QuoteRow key={ item } item={ item } deleteQuote={ this.deleteQuote } />);

    getQuote = () => {
        if (this.state.quoteItems.length !== 0) {
            let items = this.state.quoteItems;
            this.setState({
                randomQuote: items[Math.floor(Math.random()*items.length)]
            })
        }
    }

    render = () =>
      <div>
          <h3> Get Quote </h3>
          <h4> { this.state.randomQuote } </h4>
          <button onClick={ this.getQuote }> Pick a Quote </button>
          <h5> Database </h5>
          <QuoteAdder callback={ this.addNewQuote }/>
          <table width="100%">
              <tbody>
                { this.quoteRows() }
              </tbody>
          </table>
      </div>
}
