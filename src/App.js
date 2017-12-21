import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import styled, { injectGlobal } from "styled-components";

import { FENInput, Board } from "./components";
import chessApp from "./reducers";
import { CHARS } from "./reducers/board";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  ${
    Object.entries(CHARS).map(([char, unicode]) => {
      return `
        .${char}:after {
          color: ${char.slice(0, char.indexOf('_')).toLowerCase()};
          content: "${unicode}";        
        }
      `
    })
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
  height: 700px;
`;

const store = createStore(chessApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <FENInput />
          <Board />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
