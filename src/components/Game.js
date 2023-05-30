import React, { useState } from "react";
import Square from "./Square";

const QTD_SQUARES = 9;

const Game = () => {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(QTD_SQUARES).fill(null));

	const winner = calculateWinner(squares);
	const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		const nexSquares = squares.slice();
		nexSquares[i] = xIsNext ? 'X' : 'O';

		setSquares(nexSquares);
		setXIsNext(!xIsNext);
	};

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
		  	[3, 4, 5],
		  	[6, 7, 8],
		  	[0, 3, 6],
		  	[1, 4, 7],
		  	[2, 5, 8],
		  	[0, 4, 8],
		  	[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
		  	const [a, b, c] = lines[i];
		  	if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
		  	}
		}
		return null;
	}

	return (
		<>
			<div className="container">
				<div className="row">{status}</div>
				<div className="row">
				{squares.map((element, index) => {
					return (
						<Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
					);
				})}
				</div>
			</div>
		</>
	);
};

export default Game;