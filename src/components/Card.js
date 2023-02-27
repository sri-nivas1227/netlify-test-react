import React, { Component } from "react";
import Info from "./Info";
import Main from "./Main";
import Footer from "./Footer";

export default class Card extends Component {
  render() {
    return (
      <div className="bg-[#1a1b21] rounded-xl m-auto w-3/12 ">
        <Info />
        <Main />
        <Footer />
      </div>
    );
  }
}
