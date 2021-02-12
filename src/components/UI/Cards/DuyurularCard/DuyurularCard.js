import React, { Component } from 'react';
import './DuyurularCard.scss'
import Img from '../../../../assets/images/icon-16-drop-right.svg'

export default class DuyurularCard extends Component {
    render() {

        let notfState="Duyurular__card--notf";
        let notfContainer="Duyurular__card__container Duyurular__card__container--warning"
        if(!this.props.notf){
            notfState="Duyurular__card--notf hide"
            notfContainer="Duyurular__card__container"
        }

        return (
            <article className="col-lg-4 col-sm-6 Duyurular__card">
                <div className={notfState}>
                    <span>Yeni</span>
                </div>
                <div className={notfContainer}>
                    <div className="Duyurular__card__container--text">
                        <span>{this.props.cardText}</span>
                    </div>
                    <div className="Duyurular__card__container--img">
                        <img src={Img} alt="ArrowRight"/>
                    </div>
                </div>
            </article>
        )
    }
}
