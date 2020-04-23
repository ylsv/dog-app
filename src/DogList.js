import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default class DogList extends Component {
	render() {
		let dogs = this.props.dogs.map((d) => (
			<div className="Dog col-md-6 col-lg-4 text-center" key={d.name}>
				<Link className="underline" to={`/dogs/${d.name}`}>
					<img src={d.src} alt={d.name} />
					<h3 className="mt-2">{d.name}</h3>
				</Link>
			</div>
		));
		return (
			<div className="DogList">
				<h1 className="display-1 text-center my-4">Dog List!</h1>
				<div className="row">{dogs}</div>
			</div>
		);
	}
}
