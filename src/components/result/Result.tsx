
type ResultProps = {
  winner: any
  reset: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Result({winner, reset}: ResultProps) {
  return (
    <div className="result">
      {winner === "CROSS" && "Cross Won the game"}
      {winner === "CIRCLE" && "Circle Won the game"}
      {winner === "It is a tie" && "It is a tie"}
      <button onClick={reset}>Reset</button>
    </div>
  )
}