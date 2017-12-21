import { SIZE } from '../reducers/board'
const FEN_POSTFIXES = {
  ROOK: 'r',
  BISHOP: 'b',
  KING: 'k',
  KNIGHT: 'n',
  PAWN: 'p',
  QUEEN: 'q',
}

const FEN_POSTFIXES_INVERTED = {}
Object.entries(FEN_POSTFIXES).forEach(([k, v]) => FEN_POSTFIXES_INVERTED[v] =k)


function emptyGrid() {
  const grid = []

  for (let y = 0; y < SIZE; y += 1) {
    grid[y] = []
    for (let x = 0; x < SIZE; x += 1) {
      grid[y][x] = '';
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

// example: r becomes WHITE_CHESS_ROOKIE,  R becomes BLACK_CHESS_ROOKIE
function convertFenSymbolToLabel(char) {
  let isWhite = char === char.toUpperCase()
  const postfixLabel = FEN_POSTFIXES_INVERTED[char.toLowerCase()]
  return `${isWhite ? 'WHITE' : 'BLACK'}_CHESS_${postfixLabel}`
}

function explodeFenStr(str) {
  const arr = str.split('')
  const res = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]

    const num = parseInt(item, 10)
    if (Number.isInteger(num)) {
      for (let j = 0; j < num; j++){
        res.push('')
      }
    } else {
      res.push(convertFenSymbolToLabel(item))
    }
  }

  return res
}

export function fen2position(fen) {
  if (!fen || fen.split('/').length !== SIZE) {
    throw 'invalid FEN code'
  }

  const grid = fen.split('/').map(strRow => explodeFenStr(strRow))
  const positions = {}
  for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
      if (grid[y][x]) {
        positions[`${y},${x}`] = grid[y][x]
      }
    }
  }

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