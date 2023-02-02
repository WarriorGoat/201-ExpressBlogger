
// Note: If we have a function, we want to return similar values for all possible return cases.
const validateBlogData = (blogData) => {


	if (blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length>40) {
		return {
			isValid: false,
			message: "Title is required and must be a string of 40 characters or less."
		}
	}

	if (blogData.author === undefined || typeof(blogData.author) !== "string" || blogData.author.length>40) {
		return {
			isValid: false,
			message: "Author's name is required and it must be a string of 40 characters or less."
		}
	}

	if (blogData.text === undefined || typeof(blogData.text) !== "string") {
		return {
			isValid: false,
			message: "Blog text is required and it must be a string."
		}
	}

	// if (blogData.category === undefined) {
	// 	return {
	// 		isValid: false,
	// 		message: "Blog category is required."
	// 	}
	// }
    // if (!Array.isArray(blogData.category)) {
	// 	return {
	// 		isValid: false,
	// 		message: "Blog category must be an array."
	// 	}
	// }
    // if (blogData.category.length > 10) {
	// 	return {
	// 		isValid: false,
	// 		message: "Blog category must be an array with 10 entries or less."
	// 	}
	// }







    // if (blogData.category !== "Lorem" && blogData.category !== "ipsum" && blogData.category !== "dolor" && blogData.category !== "sit" && blogData.category !== "amet") {
    //     console.log(blogData.category);
    //     console.log(typeof(blogData.category));
	// 	return {
	// 		isValid: false,
	// 		message: "Blog category must match one of the five approved categories." 
	// 	}
	// }
	
	return {
		isValid: true
	}
}

module.exports = {
	validateBlogData,
}