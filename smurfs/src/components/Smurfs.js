import React from 'react';
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'

class Smurfs extends React.Component {

	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		return (
			<div>
				{console.log(this.props.smurfs)}
				{this.props.smurfs.map(smurf => (
					<div key={smurf.id}>
						<h2>Name: {smurf.name}</h2>
						<p>Age: {smurf.age}</p>
						<p>Height: {smurf.height}</p>
					</div>)
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs: state.smurfs
})


export default connect(mapStateToProps, { getSmurfs })(Smurfs);