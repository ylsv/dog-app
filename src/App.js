import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import whiskey from './imgs/whiskey.jpg';
import tubby from './imgs/tubby.jpg';
import hazel from './imgs/hazel.jpg';
import dick from './imgs/dick.jpg';
import jumpy from './imgs/jumpy.jpg';
import './App.css';

class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: 'Whiskey',
				age: 3,
				src: whiskey,
				facts: [
					'Whiskey loves eating popcorn.',
					'Whiskey is a terrible guard dog.',
					'Whiskey wants to cuddle with you!'
				]
			},
			{
				name: 'Hazel',
				age: 5,
				src: hazel,
				facts: [
					'Hazel has soooo much energy!',
					'Hazel is highly intelligent.',
					'Hazel loves people more than dogs.'
				]
			},
			{
				name: 'Tubby',
				age: 4,
				src: tubby,
				facts: [
					'Tubby is not the brightest dog',
					'Tubby does not like walks or exercise.',
					'Tubby loves eating food.'
				]
			},
			{
				name: 'Dick',
				age: 6,
				src: dick,
				facts: [ 'Dick likes to play with pussies', 'Dick wants to grow big', 'Dick always knows his place' ]
			},
			{
				name: 'Jumpy',
				age: 2,
				src: jumpy,
				facts: [ 'Jumpy is a funny puppy', 'Jumpy likes to jump high', 'Jumpy is always full of energy' ]
			}
		]
	};
	render() {
		return (
			<div>
				<Navbar dogs={this.props.dogs} />
				<div className="container">
					<Routes dogs={this.props.dogs} />
				</div>
			</div>
		);
	}
}

export default App;
