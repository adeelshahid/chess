const WHITE_CHESS_KING = '\u2654'; // ♔
const WHITE_CHESS_QUEEN = '\u2655'; // ♕
const WHITE_CHESS_ROOK = '\u2656'; // ♖
const WHITE_CHESS_BISHOP = '\u2657'; // ♗
const WHITE_CHESS_KNIGHT = '\u2658'; // ♘
const WHITE_CHESS_PAWN = '\u2659'; // ♙
const BLACK_CHESS_KING = '\u265A'; // ♚
const BLACK_CHESS_QUEEN = '\u265B'; // ♛
const BLACK_CHESS_ROOK = '\u265C'; // ♜
const BLACK_CHESS_BISHOP = '\u265D'; // ♝
const BLACK_CHESS_KNIGHT = '\u265E'; // ♞
const BLACK_CHESS_PAWN = '\u265F'; // ♟

export const CHARS = {
  WHITE_CHESS_KING,
  WHITE_CHESS_QUEEN,
  WHITE_CHESS_ROOK,
  WHITE_CHESS_BISHOP,
  WHITE_CHESS_KNIGHT,
  WHITE_CHESS_PAWN,
  BLACK_CHESS_KING,
  BLACK_CHESS_QUEEN,
  BLACK_CHESS_ROOK,
  BLACK_CHESS_BISHOP,
  BLACK_CHESS_KNIGHT,
  BLACK_CHESS_PAWN,
}

export const SIZE = 8

const initialState = {
  size: SIZE,
  positions: {
    '0,0': 'BLACK_CHESS_ROOK',
    '0,1': 'BLACK_CHESS_KNIGHT',
    '0,2': 'BLACK_CHESS_BISHOP',
    '0,3': 'BLACK_CHESS_QUEEN',
    '0,4': 'BLACK_CHESS_KING',
    '0,5': 'BLACK_CHESS_BISHOP',
    '0,6': 'BLACK_CHESS_KNIGHT',
    '0,7': 'BLACK_CHESS_ROOK',
    '1,0': 'BLACK_CHESS_PAWN',
    '4,1': 'BLACK_CHESS_PAWN',
    '1,2': 'BLACK_CHESS_PAWN',
    '1,3': 'BLACK_CHESS_PAWN',
    '1,4': 'BLACK_CHESS_PAWN',
    '1,5': 'BLACK_CHESS_PAWN',
    '1,6': 'BLACK_CHESS_PAWN',
    '1,7': 'BLACK_CHESS_PAWN',

    [(SIZE-2) + ',0']: 'WHITE_CHESS_PAWN',
    [(SIZE-2) + ',1']: 'WHITE_CHESS_PAWN',
    [(SIZE-2) + ',2']: 'WHITE_CHESS_PAWN',
    [(SIZE-2) + ',3']: 'WHITE_CHESS_PAWN',
    [(SIZE-2) + ',4']: 'WHITE_CHESS_PAWN',
    [(SIZE-2) + ',5']: 'WHITE_CHESS_PAWN',
    [(SIZE-2) + ',6']: 'WHITE_CHESS_PAWN',
    [(SIZE-2) + ',7']: 'WHITE_CHESS_PAWN',
    [(SIZE-1) + ',0']: 'WHITE_CHESS_ROOK',
    [(SIZE-1) + ',1']: 'WHITE_CHESS_KNIGHT',
    [(SIZE-1) + ',2']: 'WHITE_CHESS_BISHOP',
    [(SIZE-1) + ',3']: 'WHITE_CHESS_QUEEN',
    [(SIZE-1) + ',4']: 'WHITE_CHESS_KING',
    [(SIZE-1) + ',5']: 'WHITE_CHESS_BISHOP',
    [(SIZE-1) + ',6']: 'WHITE_CHESS_KNIGHT',
    [(SIZE-1) + ',7']: 'WHITE_CHESS_ROOK',
  },
};

export default function board(state = initialState, action) {
  return state;
}
