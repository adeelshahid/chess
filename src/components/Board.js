import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Square } from "../components";
import { movePiece } from "../reducers/board";

const Wrapper = styled.div`
  margin: 40px auto 0 auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f00;
`;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => ({
    move: {
      from: undefined,
      to: undefined
    }
  });

  onClick = ({ char, row, col }) => {
    const { move } = this.state;
    const pos = `${row},${col}`;
    if (!move.from) {
      move.from = { pos, char };
      this.setState({ move });
    } else if (pos !== move.from.pos) {
      move.to = { pos, char };
      this.props.movePiece(move)
      this.setState({ ...this.initialState() });
    }
  };

  gridView() {
    const view = [];
    const { size, positions } = this.props.board;
    const { move } = this.state;

    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        view.push(
          <Square
            key={`square-${row}-${col}`}
            size={size}
            row={row}
            col={col}
            char={positions[`${row},${col}`]}
            isMoving={move[`${row},${col}`]}
            onClick={this.onClick}
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

Board = connect(({ board }) => ({ board }), {
  movePiece
})(Board);
export { Board };
