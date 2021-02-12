import React, { Component } from "react";
import "./Navigation.scss";
import Logo from "../UI/Logo/Logo";
import SearchInput from "../UI/Inputs/SearchInput";
import SSSCard from "../UI/Cards/SssCard/SSSCard";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <nav className="Navigation">
          <div className="row">
            <Logo></Logo>
            <article className="col-lg-8">
              <div className="row">
                <SearchInput />
                <SSSCard />
              </div>
            </article>
          </div>
        </nav>
      </header>
    );
  }
}
