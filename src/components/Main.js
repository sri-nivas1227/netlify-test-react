import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div className="main text-white px-6 py-10">
        <div className="about mb-6">
          <h3 className="font-bold text-2xl py-2">About</h3>
          <p>
            I'm a full stack developer. I can say I know something about
            everything. I've tried so many technologies and worked a little with
            all of them. I'm good at React, Node.js, Python, SQL etc.. I love to
            participate hackathons, hackathon swags are the best. I love songs
            and morning sun.
          </p>
        </div>
        <div className="interests">
          <h3 className="font-bold text-2xl py-2">Interests</h3>
          <p>
            I like to explore stuff. I love to play Badminton. I like watching
            thrillers and action movies. I cook occasionally but I end up
            ruining the dish, that's my speciality. I want to buy myself a
            mechanical keyboard and a Penguin Plushie.
          </p>
        </div>
      </div>
    );
  }
}
