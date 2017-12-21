import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 20px auto;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #000;
  height: 2.6rem;
  background-color: #fff;
  text-align: center;
  font-family: Georgia, sans-serif;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

// Forsyth–Edwards Notation
// https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
// Forsyth–Edwards Notation (FEN) is a standard notation for describing a particular
// board position of a chess game. The purpose of FEN is to provide all the necessary
// information to restart a game from a particular position.
export class FENInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }

  isValid() {
    return true;
  }

  onChange = e => this.setState({ value: e.target.value });

  render() {
    return (
      <Input
        value={this.state.value}
        onChange={this.onChange}
        placeholder="enter FEN code"
        valid={this.isValid()}
      />
    );
  }
}
