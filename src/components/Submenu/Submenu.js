import React, { Component } from 'react';
import './Submenu.scss';
import SubmenuCard from '../UI/Cards/SubmenuCard/SubmenuCard';
import Img1 from '../../assets/images/icon-leader.svg';
import Img2 from '../../assets/images/icon-infoo.svg';
import Img3 from '../../assets/images/icon-operation.svg';
import Img4 from '../../assets/images/icon-list.svg';
import Img5 from '../../assets/images/icon-management.svg';
import Img6 from '../../assets/images/screenShot.png';

export default class Submenu extends Component {
    state = { 
        images:[
            Img1,Img2,Img3,Img4,Img5,Img6
        ],
        text:{
            text1:"Ayın Projosi",
            text2:"Öneri ve İyileştirme",
            text3:"Operasyonel Mükemmellik Uygulamaları",
            text4:"Anketler",
            text5:"Anket Sonuçları",
            text6:"QR Kod ile Mobile Geç",
        }
    };

    render() {
        return (
            <section className="Submenu">
                <div className="row">
                    <SubmenuCard cardImage={this.state.images[0]} cardText={this.state.text.text1}/>
                    <SubmenuCard cardImage={this.state.images[1]} cardText={this.state.text.text2}/>
                    <SubmenuCard cardImage={this.state.images[2]} cardText={this.state.text.text3}/>
                    <SubmenuCard cardImage={this.state.images[3]} cardText={this.state.text.text4}/>
                    <SubmenuCard cardImage={this.state.images[4]} cardText={this.state.text.text5}/>
                    <SubmenuCard cardImage={this.state.images[5]} cardText={this.state.text.text6} qrKod="true"/>
                </div>
            </section>
        )
    }
}
