import React from "react";
import styled from "styled-components";
import { Piece } from "../components";

const Wrapper = styled.div`
  width: ${p => `calc(100% / ${p.size}`});
  height: ${p => p.size ** 2}px;
  background-color: ${p => {
    if (p.isMoving) {
      return "#ff6100";
    }

    return (p.row + p.col) % 2 === 0 ? "#ffc794" : "#cb803e";
  }};
  
  &:hover {
    background-color: #ffa247;
  }
`;

export class Square extends React.Component {
  onClick = () => {
    const { char, row, col } = this.props;
    this.props.onClick({
      char,
      row,
      col
    });
  };

  render() {
    const { size, row, col, isMoving } = this.props;
    return (
      <Wrapper
        size={size}
        row={row}
        col={col}
        isMoving={isMoving}
        onClick={this.onClick}
      >
        <Piece row={row} col={col} />
      </Wrapper>
    );
  }
}
