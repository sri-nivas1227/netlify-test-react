import React, { Component } from "react";
import twitter from "../assets/twitter-dark.png";
import insta from "../assets/instagram-dark.png";
import github from "../assets/github.png";
import blog from "../assets/blog-dark.png";
export default class Footer extends Component {
  render() {
    return (
      <div className="buttons rounded-xl flex justify-around py-4 bg-[#161619]">
        <a href="https://twitter.com/sri_nivas1227/">
          <button className="flex justify-center">
            <img className="w-4/12" src={twitter} alt="twitter-logo" />
          </button>
        </a>
        <a href="https://www.instagram.com/sri_nivas1227/">
          <button className="flex justify-center">
            <img className="w-4/12" src={insta} alt="insta-logo" />
          </button>
        </a>
        <a href="https://github.com/sri-nivas1227/">
          <button className="flex justify-center">
            <img className="w-4/12" src={github} alt="github-logo" />
          </button>
        </a>
        <a href="https://sri-nivas1227.hashnode.dev/">
          <button className="flex justify-center">
            <img className="w-4/12" src={blog} alt="blog-logo" />
          </button>
        </a>
      </div>
    );
  }
}
