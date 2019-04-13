import React, { Component } from "react";
import SocialCard from "./social-card/SocialCard";
import { getFunName } from "../helpers";

const testOrg = {
  orgAbbr: "DFB",
  orgName: "FluxProductions",
  user: "David Bergeron",
  datePosted: "Jan 10",
  tagline: "Baking Javascript like beans."
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Social Cards</h1>
        <SocialCard org={testOrg} />
      </div>
    );
  }
}

export default App;
