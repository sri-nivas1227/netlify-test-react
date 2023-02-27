import React, { Component } from "react";
import profile from "../assets/profile.jpg";
import email from "../assets/email.png";
import linkedinDark from "../assets/linkedin-dark.png";
export default class Info extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="details  text-white text-center">
          <div className="image">
            <img
              src={profile}
              className="rounded-t-xl rounded-b-md"
              alt="profile"
            />
          </div>
          <h2 className="font-bold text-3xl mt-5">Srinivas Mekala</h2>
          <h4 className="text-md text-neutral-400">Full Stack Developer</h4>
          <a
            className="text-md text-amber-200 font-medium"
            href="https://srinivasmekala.me"
          >
            srinivasmekala.me
          </a>
        </div>
        <div className="buttons flex justify-around">
          <a className="" href="mailto:srinivasmekala1227@gmail.com">
            <button
              type="button"
              class="text-black bg-yellow-400 hover:bg-[#24292F]/90 hover:text-white font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center  my-2"
            >
              <img className="w-4 h-4 mr-2 -ml-1" src={email} alt="email" />
              Email
            </button>
          </a>

          <button className="text-white bg-[#5093e2] hover:bg-[#24292F]/90  font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center my-2">
            <img
              className="w-4 h-4 mr-2 -ml-1"
              src={linkedinDark}
              alt="linkedin"
            />
            LinkedIn
          </button>
        </div>
      </div>
    );
  }
}
