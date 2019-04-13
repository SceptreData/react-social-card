import React, { Component } from "react";

const circleStyle = {
  width: "60px",
  height: "60px",
  marginLeft: ".25rem",
  borderRadius: "50%",
  background: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const userInfoStyle = {
  color: "black",
  fontSize: "15px",
  marginLeft: "5px"
};

class SocialHeader extends Component {
  render() {
    return (
      <header style={{ display: "flex", alignItems: "center" }}>
        <div style={circleStyle} className="author-thumbnail">
          {this.props.orgShortName}
        </div>
        <div className="user-info" style={userInfoStyle}>
          <h4>
            {this.props.userName} @{this.props.orgLongName} -{" "}
            {this.props.datePosted}
          </h4>
          <p>{this.props.tagLine}</p>
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: "12px",
            color: "black"
          }}
        >
          &#9660;
        </div>
      </header>
    );
  }
}

export default SocialHeader;
