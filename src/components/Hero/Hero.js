import React, { Component } from "react";
import "./Hero.scss";
import HeroImage from './HeroImage/HeroImage'
import HeroCard from '../../components/UI/Cards/HeroCard/HeroCard'

export default class Hero extends Component {
  render() {
    return (
      <section className="Hero">
        <HeroImage />
        <div className="row">
            <article className="Hero__text">
                <div className="Hero__text__head">
                    <span className="Hero__text__head--title">With passion for</span>
                    <br/>
                    <span className="Hero__text__head--subtitle">the future</span>
                </div>
                <div className="Hero__text__content">
                    <span className="Hero__text__content--descripton">
                        We focus on contamination prevention and upstream bioprocessing to provide tailored, efficient
                        and compliant solutions.
                    </span>
                </div>
            </article>
            <article>
                <HeroCard />
            </article>
        </div>
      </section>
    );
  }
}
