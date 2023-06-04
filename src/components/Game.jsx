import React, { useState } from "react";
import Board from "./Board";

const Game = () => {

	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];

	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		setXIsNext(!xIsNext);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
		setXIsNext(nextMove % 2 === 0);
	}

	const moves = history.map((squares, move) => {
		const description = move > 0 ? `Go back to move #${move}` : `Go to game start`;
		return (
			<li key={move} className="list-group-item list-group-item-action">
				<button
					onClick={() => jumpTo(move)}
					className="btn btn-sm border-0"
				>
				{description}
				</button>
			</li>
		);
	});

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-9">
						<Board
							xIsNext={xIsNext}
							squares={currentSquares}
							onPlay={handlePlay}
						/>
					</div>
					<div className="col-3">
						<p className="mb-5 text-center fw-bold text-uppercase">Historic</p>
						<ul className="list-group">{moves}</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Game;