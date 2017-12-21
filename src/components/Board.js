import React from "react";
import styled from "styled-components";
import { Square } from "../components";

const Wrapper = styled.div`
  margin: 40px auto 0 auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f00;
`;

export class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: props.size || 8
    };
  }

  grid() {
    const view = [];
    const { size } = this.state;
    for (let row = 1; row <= size; row += 1) {
      for (let col = 1; col <= size; col += 1) {
        view.push(
          <Square
            key={`square-${row}-${col}`}
            size={size}
            row={row}
            col={col}
          />
        );
      }
    }

    return view;
  }

  render() {
    return <Wrapper>{this.grid()}</Wrapper>;
  }
}
