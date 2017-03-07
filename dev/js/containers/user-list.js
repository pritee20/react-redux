import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from "../actions/index";

class UserList extends Component{
	createList(){
		return this.props.users.map((user)=>{
			return(<li key={user.id} className="active" onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>);
		});
	}
	render(){
		return (
			<ul>
			{this.createList()}
			</ul>
			)

	}
};
function mapStatetoProp(state){
	return {
		users: state.users
	};
}

function macthDispacthToProps(dispatch){
	return bindActionCreators({selectUser: selectUser}, dispatch);
}


export default connect(mapStatetoProp, macthDispacthToProps)(UserList);