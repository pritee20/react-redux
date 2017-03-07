import React from 'react';
import UserList from "../containers/user-list";
import UserDetial from "../containers/user-detail";
require('../../scss/style.scss');


const App = function(){
	return     <div>
        <h2>User List</h2>
			<UserList/>
        <hr />
        <h2>User Details</h2>
        <UserDetial/>

    </div>
};

export default App;