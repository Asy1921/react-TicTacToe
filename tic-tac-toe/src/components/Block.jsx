import React, { useState } from "react";
import "../styles/generalStyles.css";

function Block({ value, onBlockClick }) {
  return (
    <button className="block" onClick={onBlockClick}>
      {value}
    </button>
  );
}

export default Block;
