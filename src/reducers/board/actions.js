export const MOVE_PIECE = "board/MOVE";

export const movePiece = payload => ({
  payload,
  type: MOVE_PIECE
});
