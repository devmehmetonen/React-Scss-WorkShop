import React, { Component } from 'react';
import Img from "../../../assets/images/hero-image.png";
import './HeroImage.scss'


export default class HeroImage extends Component {
    render() {
        return (
            <img
                src={Img} alt=""
                srcSet="../../../assets/images/hero-image@2x 2x,
                ../../../assets/images/hero-image@3x 3x"
                className="Heroimage"
                />
        )
    }
}
