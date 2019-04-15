import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-left: 55px;
  margin-right: 40px;
  color: black;
  font-size: 1rem;

  header {
    display: flex;
    flex-direction: column;
    background: linear-gradient(#ffa500, #ffb732);
    color: #fff;
    padding: 0.5rem;
    border-radius: 4px 4px 0 0;
    border: 1px solid lightgrey;
    border-bottom: 0;
  }

  .org-box {
    width: 45px;
    height: 45px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 2rem;
  }

  .post-author {
    display: flex;
    align-items: center;
    align-self: flex-end;
    padding: 0.5rem 0.75rem;
    background: #fff;
    color: #ffa500;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 2px;
    img {
      margin-left: 10px;
      border-radius: 1px;
    }
  }

  section {
    border: 1px solid lightgrey;
    border-radius: 0 0 4px 4px;
    text-align: left;
    padding: 0.25rem 0.5rem;
    h4 {
      margin: 0 0 5px 0;
    }
    p {
      margin: 0;
      font-size: 0.8rem;
      margin-bottom: 0.25rem;
    }
    a,
    a:visited {
      font-size: 0.75rem;
      color: lightgrey;
      text-decoration: none;
      margin-bottom: 0.5rem;
      &:hover {
        color: lightslategray;
      }
    }
  }
`;

export default class SocialContent extends Component {
  render() {
    const {
      orgName,
      orgAbbr,
      user,
      datePosted,
      tagline,
      userImg,
      userUrl,
      content
    } = this.props.org;

    return (
      <Content>
        <header>
          <div className="org-box">{orgAbbr}</div>
          <h3>{tagline}</h3>
          <div className="post-author">
            {user}
            <img src={userImg} />
          </div>
        </header>
        <section>
          <h4>{tagline}</h4>
          <p>{content}</p>
          <a href={userUrl}>{orgName}</a>
        </section>
      </Content>
    );
  }
}
