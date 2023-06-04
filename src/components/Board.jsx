import Square from "./Square";

const Board = ({ xIsNext, squares, onPlay }) => {

	const winner = calculateWinner(squares);
	const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		const nexSquares = squares.slice();
		nexSquares[i] = xIsNext ? 'X' : 'O';

		onPlay(nexSquares);
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
				<div className={`row justify-content-center ${!winner ? 'mb-5' : ''}`}>
					<div className={`col-auto ${winner ? 'alert alert-success' : ''}`}>
						{status}
					</div>
				</div>
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

export default Board;