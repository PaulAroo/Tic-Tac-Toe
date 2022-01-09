
import Circle from '../circle/Circle'
import Cross from '../cross/Cross'
import './square.css'

type SquareProps = {
  position : number
  value : string
  taketurn : Function
  reset?: () => void
}

export default function Square({position, value, taketurn}: SquareProps) {
  function handleClick() {
    if (value === "EMPTY") {
      taketurn(position)
    }
  }

  return (
    <div className="square" onClick={handleClick}>
      {value === 'CIRCLE' && <Circle />}
      {value === 'CROSS' && <Cross />}
    </div>
  )
}