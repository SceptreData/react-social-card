import React, { Component } from "react";
import styled from "styled-components";
import SocialHeader from "./SocialHeader";
import SocialContent from "./SocialContent";
import SocialFooter from "./SocialFooter";
const Card = styled.section`
  width: 460px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 0.5rem;
  box-shadow: 0 0 5px grey;
  border-radius: 4px;
`;
// const cardStyleOld = {
//   width: "460px",
//   margin: "0 auto",
//   background: "#f9f9f9",
//   padding: ".5rem",
//   boxShadow: "0 0 5px grey",
//   borderRadius: "4px"
// };
class SocialCard extends Component {
  render() {
    return (
      // <div className="social-card" style={cardStyle}>
      <Card>
        <SocialHeader
          orgShortName={this.props.orgShortName}
          userName={this.props.userName}
          orgLongName={this.props.orgLongName}
          datePosted={this.props.datePosted}
          tagLine={this.props.tagLine}
        />
        <SocialContent />
        <SocialFooter />
      </Card>
      // </div>
    );
  }
}

export default SocialCard;
