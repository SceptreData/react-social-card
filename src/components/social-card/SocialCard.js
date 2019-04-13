import React, { Component } from "react";
import styled from "styled-components";
import SocialHeader from "./SocialHeader";
import SocialContent from "./SocialContent";
import SocialFooter from "./SocialFooter";

const Card = styled.section`
  font-family: "Raleway", sans-serif;
  width: 460px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 0.5rem;
  box-shadow: 0 0 5px grey;
  border-radius: 4px;
`;

class SocialCard extends Component {
  render() {
    return (
      // <div className="social-card" style={cardStyle}>
      <Card>
        <SocialHeader org={this.props.org} />
        <SocialContent />
        <SocialFooter />
      </Card>
      // </div>
    );
  }
}

export default SocialCard;
