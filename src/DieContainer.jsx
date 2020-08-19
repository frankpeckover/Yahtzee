import React from 'react';
import './app.css';
import Die from './Die.jsx';

export default class DieContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			die: [
				[
					true,
					1
				],
				[
					true,
					1
				],
				[
					true,
					1
				],
				[
					true,
					1
				],
				[
					true,
					1
				]
			],

			dieSum: 0,
			rollNum: 0,
			maxRolls: 3
		};
	}

	toggleRoll = (event) => {
		var tempArr = this.state.die;
		tempArr.forEach((e, i) => {
			if (event.target.parentElement.id == parseInt(i)) {
				e[0] = !e[0];
			}
		});
		this.setState({
			die: tempArr
		});
	};

	clearToggles = () => {
		var tempArr = this.state.die;
		tempArr.forEach((e) => {
			e[0] = true;
		});

		this.setState({
			die: tempArr
		});
	};

	roll = () => {
		var tempArr = this.state.die;
		tempArr.forEach((e, i) => {
			if (e[0] !== false) {
				e[1] = 1 + Math.floor(Math.random() * 6);
			}
		});
		this.setState({
			die: tempArr
		});
		if (this.state.rollNum === this.state.maxRolls - 1) {
			this.clearToggles();
		}
		this.incrementRolls();
		this.sumDie();
	};

	incrementRolls = () => {
		let num = this.state.rollNum;
		if (num > this.state.maxRolls - 1) {
			num = 1;
		} else {
			num++;
		}
		this.setState({
			rollNum: num
		});
	};

	sumDie = () => {
		var counter = 0;
		this.state.die.forEach((die) => {
			counter += die[1];
		});
		this.setState({
			dieSum: counter
		});
	};

	render() {
		return (
			<div>
				<div className="fill center">
					<Die
						key={0}
						identifier={0}
						toggleRoll={this.toggleRoll}
						roll={this.state.die[0][0]}
						value={this.state.die[0][1]}
					/>
					<Die
						key={1}
						identifier={1}
						toggleRoll={this.toggleRoll}
						roll={this.state.die[1][0]}
						value={this.state.die[1][1]}
					/>
					<Die
						key={2}
						identifier={2}
						toggleRoll={this.toggleRoll}
						roll={this.state.die[2][0]}
						value={this.state.die[2][1]}
					/>
					<Die
						key={3}
						identifier={3}
						toggleRoll={this.toggleRoll}
						roll={this.state.die[3][0]}
						value={this.state.die[3][1]}
					/>
					<Die
						key={4}
						identifier={4}
						toggleRoll={this.toggleRoll}
						roll={this.state.die[4][0]}
						value={this.state.die[4][1]}
					/>
				</div>
				<button style={{ height: '30px' }} className="fill center" onClick={this.roll}>
					Roll
				</button>
				<div className="fill center">
					<p className="fill left-align" style={{ color: 'white' }}>
						Total: {this.state.dieSum}
					</p>
					<p className="fill left-align" style={{ color: 'white' }}>
						Roll Num: {this.state.rollNum}
					</p>
				</div>
				<button style={{ height: '30px' }} className="fill center" onClick={this.clearToggles}>
					Clear
				</button>
			</div>
		);
	}
}
