import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetial extends Component{

	render() {
		if(!this.props.user){
			return (<mark>Select some user...</mark>)
		}
		return (
				<div>
				<p>{this.props.user.age}</p>
				<p>{this.props.user.description}</p>
				<p>{this.props.user.thumbnail}</p>
				</div>
			);
	}
}

function mapStatetoProp(state){
	return {
		user: state.activeUser
	};
}


export default connect(mapStatetoProp)(UserDetial);