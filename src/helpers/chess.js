import { SIZE } from '../reducers/board'
const FEN_POSTFIXES = {
  ROOK: 'r',
  BISHOP: 'b',
  KING: 'k',
  KNIGHT: 'n',
  PAWN: 'p',
  QUEEN: 'q',
}


function emptyGrid() {
  const grid = []

  for (let i = 0; i < SIZE; i += 1) {
    grid[i] = []
    for (let j = 0; j < SIZE; j += 1) {
      grid[i][j] = '';
    }
  }

  return grid
}

function squashFenCols(cols) {
  const res = []

  let counter = 0
  for (let i = 0; i < cols.length; i += 1) {
    if (cols[i].length > 0) {
      if (counter > 0) {
        res.push(counter)
      }

      res.push(cols[i])
      counter = 0
    } else {
      counter += 1
    }
  }

  if (counter > 0) {
    res.push(counter)
  }

  return res.join('')
}

// single-dimension array of columns
function fenStrFromCols(cols) {
  const isEmpty = cols.every(i => i.length === 0)
  if (isEmpty) {
    return 8
  }

  const allFilled = cols.every(i => i.length > 0)
  if (allFilled) {
    return cols.join('')
  }

  return squashFenCols(cols)
}

export function fen2position(fen) {
  const positions = [[]]
  return positions;
}

export function position2fen(positions) {
  const grid = emptyGrid()

  Object.entries(positions).forEach(([position, char]) => {
    let fenCode = char.split('_')[2]
    fenCode = FEN_POSTFIXES[fenCode]
    if (char.indexOf('WHITE_') === 0) {
      fenCode = fenCode.toUpperCase()
    }

    let x, y
    [y, x] = position.split(',')
    grid[y][x] = fenCode
  })

  let fenCodeArr = []
  grid.forEach((row, i) => fenCodeArr[i] = fenStrFromCols(grid[i]))

  return fenCodeArr.join('/')
}