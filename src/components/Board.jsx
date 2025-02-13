import React from 'react'
import Square from './Square'
import { useState } from 'react'

const Board = () => {
  const [row, setRow] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)

// code for winner.............
const winner = ()=>{
  const winnerLogic = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let logic of winnerLogic)
  {
    const [a,b,c] = logic;
    if(row[a] !== null && row[a] === row[b] && row[a] === row[c])
    {
      return row[a];
    }
  }
  return false;
}

const isWinner = winner();
  const HandleClick = (index)=>{
    if(row[index] !== null)
    {
      return;
    }
   const Copy = [...row];
   Copy[index] = xTurn ? "X" : "O";
   setRow(Copy);
   setXTurn(!xTurn);
  }

  const handleReset = ()=>{
    setRow(Array(9).fill(null));
  }; 
  return (

    <div className='board-container'>
      {isWinner ? (<>{isWinner} is winner <br /> <br /> <button onClick={handleReset}>Play Again</button></>) :(
      <>
      <h4>Next Player {xTurn ? "X" : "O"} </h4>
      <div className="row">
        <Square onClick={()=>HandleClick(0)} value={row[0]}/>
        <Square onClick={()=>HandleClick(1)} value={row[1]}/>
        <Square onClick={()=>HandleClick(2)} value={row[2]}/>
      </div>
      <div className="row">
        <Square onClick={()=>HandleClick(3)} value={row[3]}/>
        <Square onClick={()=>HandleClick(4)} value={row[4]}/>
        <Square onClick={()=>HandleClick(5)} value={row[5]}/>
      </div>
      <div className="row">
        <Square onClick={()=>HandleClick(6)} value={row[6]}/>
        <Square onClick={()=>HandleClick(7)} value={row[7]}/>
        <Square onClick={()=>HandleClick(8)} value={row[8]}/>
      </div>
      </>)}  
    </div>
    
  )
}

export default Board
