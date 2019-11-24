import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Img = styled.img`
  width: 100px;
  border-radius: 50%;
`;
const Bicycle = styled.img`
  width: 100px;
`;
export const Home = () => {
  return (
    <div>
      <Img src="/avatar.jpg" />
      <p>Hello, I'm May!</p>
      <p>I'm a developer based in Sydney.</p>
      <p>
        I work with a legal-tech startup{" "}
        <a href="https://nexl.io/" target="__blank">
          NEXL
        </a>{" "}
        building a platform to help lawyers grow their network.
      </p>
      <p>
        Outside work, I like building{" "}
        <Link to="/silly-apps">silly websites</Link> for fun.
      </p>
      <p>My favorite things include:</p>
      <ul>
        <li>
          My bicycle
          <ul>
            <li>
              <Bicycle src="/bicycle.jpg" />
            </li>
            <li>
              It's a vintage road bike and it looks really cool (please agree
              with me)
            </li>
            <li>
              I'm in a infinite cycle of riding it, breaking it and fixing it
            </li>
          </ul>
        </li>
        <li>
          Seeing more women in tech
          <ul>
            <li>I help at coding workshops for women</li>
            <li>
              I subtly(?) talk my friends into coding, and lure them with free
              food at meetups
            </li>
          </ul>
        </li>
        <li>
          Tuna & rice for lunch
          <ul>
            <li>I've been having it for 300 days and counting</li>
          </ul>
        </li>
      </ul>
      <p>
        <a href="mailto:mayjunwenchen@gmail.com" target="__blank">
          Email me
        </a>{" "}
        if you like, or find me on{" "}
        <a href="https://www.linkedin.com/in/junwenchen/" target="__blank">
          LinkedIn
        </a>{" "}
        and{" "}
        <a href="https://github.com/MMMayC" target="__blank">
          GitHub
        </a>
        .
      </p>
    </div>
  );
};
