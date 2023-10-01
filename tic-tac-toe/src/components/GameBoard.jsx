import React, { useState } from "react";
import Block from "./Block";
export default function GameBoard() {
  const [nextPlayer, setNextPlayer] = useState(true);
  const [block, setBlock] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (calculateWinner(block) || block[i]) {
      return;
    }
    const nextBlock = block.slice();
    if (nextPlayer) {
      nextBlock[i] = "X";
    } else {
      nextBlock[i] = "O";
    }
    setBlock(nextBlock);
    setNextPlayer(!nextPlayer);
  }
  const winner = calculateWinner(block);
  let gameStatus;
  if (winner) {
    gameStatus = "Winner: " + winner;
  } else {
    gameStatus = "Next player: " + (nextPlayer ? "X" : "O");
  }
  return (
    <>
      <div className="gameStatus">{gameStatus}</div>
      <div className="gameBoard">
        <div className="gameBoard-row">
          <Block value={block[0]} onBlockClick={() => handleClick(0)} />
          <Block value={block[1]} onBlockClick={() => handleClick(1)} />
          <Block value={block[2]} onBlockClick={() => handleClick(2)} />
        </div>
        <div className="gameBoard-row">
          <Block value={block[3]} onBlockClick={() => handleClick(3)} />
          <Block value={block[4]} onBlockClick={() => handleClick(4)} />
          <Block value={block[5]} onBlockClick={() => handleClick(5)} />
        </div>
        <div className="gameBoard-row">
          <Block value={block[6]} onBlockClick={() => handleClick(6)} />
          <Block value={block[7]} onBlockClick={() => handleClick(7)} />
          <Block value={block[8]} onBlockClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
