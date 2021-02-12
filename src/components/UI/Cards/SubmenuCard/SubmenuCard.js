import React, { Component } from 'react';
import Img from '../../../../assets/images/cup.svg'
import './SubmenuCard.scss';

export default class SubmenuCard extends Component {


    render() {
        let imgClassName;

        if(this.props.qrKod){
            imgClassName = "Submenu__card__container--img--2";
        }else{
            imgClassName = "Submenu__card__container--img";
        }
        return (
            <div className="col-lg-4 col-sm-6 Submenu__card">
                <div className="Submenu__card__container">
                    <div className="Submenu__card__container--text">
                        <span>{this.props.cardText}</span>
                    </div>
                    <div className={imgClassName}>
                        <img src={this.props.cardImage} alt={this.props.cardText.length}></img>
                    </div>
                </div>
            </div>
        )
    }
}
