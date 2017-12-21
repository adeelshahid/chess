import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {fen2position, position2fen} from "../helpers";
import { setFenPosition, SIZE } from "../reducers/board";

const Wrapper = styled.div``;

const Input = styled.input`
  margin: 20px auto;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #000;
  height: 2.6rem;
  background-color: ${p => p.filled && !p.valid ? '#ff9bac' : '#fff'};
  text-align: center;
  font-family: Georgia, sans-serif;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

const Label = styled.div`
  text-align: center;
`;

// Forsyth–Edwards Notation
// https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
// Forsyth–Edwards Notation (FEN) is a standard notation for describing a particular
// board position of a chess game. The purpose of FEN is to provide all the necessary
// information to restart a game from a particular position.
class FENInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }

  isValid() {
    return this.state.value.split('/').length === SIZE;
  }

  onChange = e => this.setState({ value: e.target.value });

  onKeyUp = e => {
    try {
      if (e.keyCode === 13) {
        e.preventDefault()
        const fen = this.state.value
        this.props.setFenPosition({
          positions: fen2position(fen)
        })

        this.setState({ value: '' })
      }
    } catch (e) {
      console.warn(e)
    }
  }

  render() {
    return (
      <Wrapper>
        <Input
          value={this.state.value}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          placeholder="enter FEN code"
          valid={this.isValid()}
          filled={this.state.value.length > 0}
        />
        <Label>{position2fen(this.props.positions)}</Label>
      </Wrapper>
    );
  }
}

FENInput = connect(({ board }) => ({ positions: board.positions }), {
  setFenPosition
})(FENInput);
export { FENInput };
