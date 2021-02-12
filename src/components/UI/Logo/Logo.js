import React, { Component } from 'react'
import Img from '../../../assets/images/logo.png'
import  './Logo.scss';



export default class Logo extends Component {
    render() {
        return (
            <article className="col-lg-4 NavigationLogo">
                <img src={Img}
                     alt="logo" 
                     className="NavigationLogo--img"
                     srcSet="../../../assets/images/logo@2x.png 2x,
                     ../../../assets/images/logo@3x.png 3x"
                     />
            </article>
        )
    }
}
