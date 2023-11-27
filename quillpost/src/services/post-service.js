import { myPostAxios } from "./helper";
import { BASE_URL_POST } from "./helper";

//create post function
export const createPost = (postData) => {

    //console.log(postData);
    
    return myPostAxios.post(BASE_URL_POST+ `/api/category/${postData.categoryID}/posts`,postData)
        .then(response => response.data)

};

//get all posts
export const loadAllPosts = (pageNumber, pageSize) => {
    return myPostAxios.get(BASE_URL_POST+`/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response => response.data)
}