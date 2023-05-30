import React from "react";
import "../assets/Square.css";

const Square = ({value, onSquareClick}) => {
	return (
		<button onClick={onSquareClick} className="btn btn-light border border-dark col-4">
			{value}
		</button>
	)
};

export default Square;