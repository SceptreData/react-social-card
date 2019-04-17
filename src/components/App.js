import React, { Component } from "react";
import SocialCard from "./social-card/SocialCard";
import { getRandomName, getBusinessName, rando } from "../helpers";

const testOrg = {
  orgAbbr: "DFB",
  orgName: "FluxProductions",
  user: "David Bergeron",
  datePosted: "Jan 10",
  tagline: "Baking Javascript like beans.",
  content:
    "Trying to work with some javascript are you? Well good luck. This stuff is hard. Can you map bro?",
  userImg: "http://lorempixel.com/35/35/people/",
  userUrl: "https://dfb-portfolio.netlify.com"
};

class App extends Component {
  state = {
    posts: {}
  };

  loadSamplePosts = () => {
    let samplePosts = {};
    for (let i = 0; i < 10; i++) {
      let org = {
        orgAbbr: rando(["DFB", "ABC", "BFG"]),
        orgName: getBusinessName(),
        user: getRandomName(),
        datePosted: Date.now(),
        tagline: "lorem ipsum ipto facto",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet voluptate eveniet perspiciatis architecto repellat maiores neque, debitis nesciunt tempore delenit",
        userImg: "http://lorempixel.com/35/35/",
        userUrl: "#"
      };
      samplePosts[org.orgName] = org;
    }
    this.setState({ posts: samplePosts });
  };

  render() {
    return (
      <div className="App">
        <h1>Social Cards</h1>
        <button onClick={this.loadSamplePosts}>Load sample users.</button>
        <ul style={{ listStyle: "none" }}>
          <SocialCard org={testOrg} />
          {Object.keys(this.state.posts).map(key => (
            <SocialCard key={key} org={this.state.posts[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
