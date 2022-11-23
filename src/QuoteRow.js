import React, { Component } from 'react';

export class QuoteRow extends Component {
    render = () =>
        <tr>
            <td>
                <p> {this.props.item} </p>
            </td>
            <td>
                <button onClick={ () => this.props.deleteQuote(this.props.item) }>
                    Delete
                </button>
            </td>
        </tr>
}