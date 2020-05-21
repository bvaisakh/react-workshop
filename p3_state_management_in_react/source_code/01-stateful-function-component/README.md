A simple example of stateful function component.  
'App' component is the stateful function component.

Class component example
```
import React, { Component } from "react";
export default class StarRating extends Component {
	constructor(props) {
		super(props);
		this.state = { starsSelected: 0 };
		this.change = this.change.bind(this);
	}
	change(starsSelected) {
		this.setState({ starsSelected });
	}
	render() {
		const { totalStars } = this.props;
		const { starsSelected } = this.state;
		return (
			<div>
				{" "}
				{[...Array(totalStars)].map((n, i) => (
					<Star
						key={i}
						selected={i < starsSelected}
						onClick={() => this.change(i + 1)}
					/>
				))}{" "}
				<p>
					{" "}
					{starsSelected} of {totalStars} stars{" "}
				</p>{" "}
			</div>
		);
	}
}
```