import React, { Component } from 'react'
import Img from '../../../../assets/images/icon-sss.svg'
import './SSSCard.scss'

export default class SSSCard extends Component {
    render() {
        return (
            
    <article className="col-md-6 SSS">
        <div>
          <img src={Img} alt="search" className="SSS--img"/>
          <span className="SSS--text">Sık Sorulan Sorular</span>
        </div>
      </article>
           
        )
    }
}
