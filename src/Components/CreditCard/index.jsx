import React from "react";
import PaymentCard from 'react-payment-card-component'

class CreditCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                cvc: "",
                expiry: "",
                name: "",
                number: ""
            },
            flipped: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
	handleInputChange (e) {
		this.state.data[e.target.name] = e.target.value;
        console.log(this.state.data);
	};
	flipCard () {
		setFlipped( !flipped )
	}
    render () {
        return (
            <div>
                <PaymentCard
                    bank="master"
                    model="personnalite"
                    type="black"
                    brand="mastercard"
                    number={this.state.data.number}
                    cvv={this.state.data.cvc}
                    holderName={this.state.data.name}
                    expiration={this.state.data.expiry}
                    flipped={this.state.flipped}
                />
                <form action="">
                    <input
                        type="number"
                        name="cvc"
                        pattern="\d{3,4}"
                        maxLength="4"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="expiry"
                        placeholder="Expire Date"
                        onChange={this.handleInputChange}
                        pattern="\d\d/\d\d"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="number"
                        name="number"
                        pattern="[\d| ]{16,22}"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                    />
			    </form>
            </div>
        )
    }
};

export default CreditCard;