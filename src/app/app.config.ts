/**
 * API Domain config
 */
export const API_HOST = "http://localhost";
export const API_PORT = "9000";
export const API_BASE_URL = `${API_HOST}:${API_PORT}`;


/**
 *  ---------- 
 * | Api map  |
 *  ----------
 */


 /** POST */
 export var createPost = "api/post/create";

 /** GET */
 export var allPosts   = "api/posts";

 /** GET */
 export var onePost    = "api/post"; // api/post/{id}

 /** DELETE */
 export var deletePost = "api/post/delete"; // api/post/delete/{id} 

 /** PUT */
 export var updatePost = "api/post"; // api/post/{id}