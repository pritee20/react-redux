export const selectUser = (user) =>{
	//console.log("user click item", user.first);
	return{
		type: "USER_SELECTED",
		payload: user
	}
};