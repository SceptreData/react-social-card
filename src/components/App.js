import React, { Component } from "react";
import SocialCard from "./social-card/SocialCard";
import { getFunName } from "../helpers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Social Cards</h1>
        <SocialCard
          orgShortName="DFB"
          userName="David Bergeron"
          orgLongName="FluxProductions"
          datePosted="Jan 10"
          tagLine="Baking Javascript like Beans"
        />
      </div>
    );
  }
}

export default App;
