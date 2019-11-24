import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { SillyApps } from "./SillyApps";
import styled from "styled-components";
const Container = styled.div`
  background-color: #262626;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f2f2f2;
`;
function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/silly-apps" component={SillyApps} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
