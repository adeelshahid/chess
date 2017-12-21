import React from "react";
import { connect } from "react-redux";
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

class Board extends React.Component {
  gridView() {
    const view = [];
    const { size } = this.props.board;
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
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
    return <Wrapper>{this.gridView()}</Wrapper>;
  }
}

Board = connect(({ board }) => ({ board }))(Board);
export { Board };
