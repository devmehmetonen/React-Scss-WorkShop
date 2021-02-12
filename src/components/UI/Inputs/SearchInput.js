import React, { Component } from "react";
import Img from "../../../assets/images/icon-search.svg";
import  "./SearchInput.scss";

export default class Input extends Component {
  render() {
    return (
      <article className="col-md-6 SearchInput">
        <div className="SearchInput__content">
          <img src={Img} alt="search" className="SearchInput__content--img"/>
          <input
            type="text"
            className="SearchInput__content--input"
            placeholder="Takip Numarası ile Kayıt Ara"
          ></input>
          <button className="SearchInput__content--button">Ara</button>
        </div>
      </article>
    );
  }
}
