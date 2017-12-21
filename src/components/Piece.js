import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 36px;
  line-height: 36px;
`;

class Piece extends React.Component {
  render() {
    return <Wrapper className={this.props.char} />;
  }
}

Piece = connect(({ board }, { row, col }) => ({
  char: board.positions[`${row},${col}`] || ""
}))(Piece);
export { Piece };
