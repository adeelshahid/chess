import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${p => `calc(100% / ${p.size}`});
  height: ${p => p.size * 8}px;
  background-color: ${p => (p.row + p.col) % 2 === 0 ? '#ffc794' : '#cb803e'};
`;

export class Square extends React.Component {
  render() {
    const { size, row, col } = this.props;
    return <Wrapper size={size} row={row} col={col} />;
  }
}
