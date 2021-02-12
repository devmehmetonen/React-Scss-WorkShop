import React, { Component } from "react";
import "./Duyurular.scss";
import Img from "../../assets/images/icon-search.svg";
import Img2 from "../../assets/images/icon-maximize.svg";
import DuyurularCard from '../UI/Cards/DuyurularCard/DuyurularCard'
import ButtonWithText from "../UI/Buttons/ButtonWithText/ButtonWithText";
import ButtonOnlyIcon from "../UI/Buttons/BtnOnlyIcon/ButtonOnlyIcon";


export default class Duyurular extends Component {
    state = { 
        text:{
            text1:"İzin Duyurusu",
            text2:"Yemekhane Duyurusu",
            text3:"Ulaşım Duyurusu",
            text4:"Sağlık Sigortası Duyurusu",
            text5:"Eğitim Duyuruları",
            text6:"İş Yeri Güvenliği Duyurusu",
        },
        BtnWithText:{
          img:Img2,
          text:"Genişlet",
          alt:'Genişlet'
        },
        ButtonOnlyIcon:Img
    };

  render() {

    return (
      <section className="Duyurular">
        <div className="Duyurular__content">
          <div className="Duyurular__content__title">
            <span>Duyurular</span>
          </div>
          <div className="Duyurular__content__buttons">
            <ButtonOnlyIcon btnImg={this.state.ButtonOnlyIcon}/>
            <ButtonWithText btnImg={this.state.BtnWithText.img} imgAlt={this.state.BtnWithText.alt} btnText={this.state.BtnWithText.text}/>
          </div>
        </div>
        <div className="row">
          <DuyurularCard cardText={this.state.text.text1} notf={true}/>
          <DuyurularCard cardText={this.state.text.text2}/>
          <DuyurularCard cardText={this.state.text.text3}/>
          <DuyurularCard cardText={this.state.text.text4}/>
          <DuyurularCard cardText={this.state.text.text5}/>
          <DuyurularCard cardText={this.state.text.text6}/>
        </div>
      </section>
    );
  }
}
