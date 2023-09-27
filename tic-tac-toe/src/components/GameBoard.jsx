import React from "react";
import Block from "./Block";
export default function GameBoard() {
  return (
    <div className="gameBoard">
      <div className="gameBoard-row">
        <Block />
        <Block />
        <Block />
      </div>
      <div className="gameBoard-row">
        <Block />
        <Block />
        <Block />
      </div>
      <div className="gameBoard-row">
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
}
