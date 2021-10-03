import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import {
	formatCreditCardNumber,
	formatCVC,
	formatExpirationDate
} from './cardUtils'

const MyCards = () => {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const [flipped, setFlipped] = useState(false);
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};
	function flipCard () {
		setFlipped( !flipped )
	}

	return (
		<div id="PaymentForm">
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focused={flipped}
				name={data.name}
				number={data.number}
				
			/>
			<form action="">
				<input
					type="number"
					name="cvc"
					pattern="\d{3,4}"
					maxLength="4"
					placeholder="CVC"
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="expiry"
					placeholder="Expire Date"
					onChange={handleInputChange}
					pattern="\d\d/\d\d"
				/>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="number"
					pattern="[\d| ]{16,22}"
					placeholder="Card Number"
					onChange={handleInputChange}
				/>
			</form>
			<button onClick={() => flipCard()}>Flip Card</button>
		</div>
	);
};

export default MyCards;