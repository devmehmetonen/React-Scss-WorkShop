import React, { Component } from 'react';
import './ButtonWithText.scss'

export default class ButtonWithText extends Component {
    render() {
        return (
            <button className="BtnWithText">
              <span>{this.props.btnText}</span>
              <img
                src={this.props.btnImg}
                alt={this.props.imgAlt}
              />
            </button>
        )
    }
}
