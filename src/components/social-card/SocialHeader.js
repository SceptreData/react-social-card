import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  text-align: left;
  h4 {
    margin: 0;
  }
  p {
    font-size: 0.8rem;
    margin: 2px 0 0 6px;
    font-weight: 300;
  }
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 0.25rem;
  border-radius: 50%;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const UserInfo = styled.div`
  color: black;
  font-size: 15px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;

  .date-posted {
    font-weight: 300;
    font-size: 0.75rem;
    margin-left: 10px;
  }
`;

class SocialHeader extends Component {
  render() {
    const { orgName, orgAbbr, user, datePosted, tagline } = this.props.org;

    return (
      <Header>
        <Circle>{orgAbbr}</Circle>
        <UserInfo>
          <h4>
            {user} @{orgName} -{" "}
            <span className="date-posted">{datePosted}</span>
          </h4>
          <p>{tagline}</p>
        </UserInfo>
      </Header>
    );
  }
}

export default SocialHeader;
