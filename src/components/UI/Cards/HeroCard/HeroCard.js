import React, { Component } from "react";
import Img from "../../../../assets/images/calisan.svg";
import "./HeroCard.scss";

export default class HeroCard extends Component {
  render() {
    return (
      <div className="Hero__card">
          <div className="row">
          <div className="Hero__card__left">
          <img src={Img} alt="peoples" className="Hero__card--img"></img>
        </div>
        <div className="Hero__card__right">
          <span className="Hero__card__right--title">Getinge Toplam Çalışan Sayısı</span>
          <br></br>
          <span className="Hero__card__right--count">1360 Kişi</span>
        </div>
          </div>
      </div>
    );
  }
}
