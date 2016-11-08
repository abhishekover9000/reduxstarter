// increment a like
function increment(index){
	return {
		type: "INCREMENT_LIKES",
		index: index
	}
}

// add comment
function addComment(postId, author, comment){
	return{
		type: "ADD_COMMENT",
		postId,
		author,
		comment
	}
}

// remove comment
function removecomment(postId, i){
	return{
		type: "REMOVE_COMMENT",
		i,
		postId
	}
}
