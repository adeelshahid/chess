import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";

import { FENInput, Board } from "./components";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  margin: 40px auto 0 auto;
  padding: 20px;
  border: 1px solid #000;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 800px;
  height: 746px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <FENInput />
        <Board />
      </Wrapper>
    );
  }
}

export default App;
