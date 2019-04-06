import React, { Component } from "react";
import SocialHeader from "./SocialHeader";
import SocialContent from "./SocialContent";
import SocialFooter from "./SocialFooter";

class SocialCard extends Component {
  render() {
    return (
      <div className="social-card">
        <SocialHeader />
        <SocialContent />
        <SocialFooter />
      </div>
    );
  }
}

export default SocialCard;
