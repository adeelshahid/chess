export const MOVE_PIECE = "board/MOVE";
export const SET_FEN_POSITION = "board/SET_FEN_POSITION";

export const movePiece = payload => ({
  payload,
  type: MOVE_PIECE
});

export const setFenPosition = payload => ({
  payload,
  type: SET_FEN_POSITION
});
