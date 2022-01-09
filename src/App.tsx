
import React from 'react';
import './App.css';
import Result from './components/result/Result';
import Square from './components/square/Square';
import detectWinner from './utils/detect-winner';

export default function App() {

  const [state, setstate] = React.useState({
    player: "CIRCLE",
    positions: [
      "EMPTY", "EMPTY", "EMPTY",
      "EMPTY", "EMPTY", "EMPTY",
      "EMPTY", "EMPTY", "EMPTY"
    ]
  })

  function takeTurn(position: number) {
    const positions = [...state.positions]
    positions[position] = state.player

    setstate({
      player: state.player === "CIRCLE" ? "CROSS" : "CIRCLE",
      positions
    })
  }

  function reset() {
    setstate({
      player: "CIRCLE",
      positions: [
        "EMPTY", "EMPTY", "EMPTY",
        "EMPTY", "EMPTY", "EMPTY",
        "EMPTY", "EMPTY", "EMPTY"
      ]
    })
  }

  const winner = detectWinner(state.positions)


  return (
    <div>
      <div className="grid">
        <Square position={0} value={state.positions[0]} taketurn={takeTurn}/>
        <Square position={1} value={state.positions[1]} taketurn={takeTurn}/>
        <Square position={2} value={state.positions[2]} taketurn={takeTurn}/>
        <Square position={3} value={state.positions[3]} taketurn={takeTurn}/>
        <Square position={4} value={state.positions[4]} taketurn={takeTurn}/>
        <Square position={5} value={state.positions[5]} taketurn={takeTurn}/>
        <Square position={6} value={state.positions[6]} taketurn={takeTurn}/>
        <Square position={7} value={state.positions[7]} taketurn={takeTurn}/>
        <Square position={8} value={state.positions[8]} taketurn={takeTurn}/>
      </div>
      {winner && <Result winner={winner} reset={reset}/>}
    </div>
  );
}