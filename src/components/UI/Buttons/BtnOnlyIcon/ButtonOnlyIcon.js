import React, { Component } from "react";
import './ButtonOnlyIcon.scss'

export default class ButtonOnlyIcon extends Component {
  render() {
    return (
      <button className="ButtonOnlyIcon">
        <img src={this.props.btnImg} alt="search" />
      </button>
    );
  }
}
