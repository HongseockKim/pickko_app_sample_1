import apiClient from "../axios/index.js";

export default {
    exampleApi(){
        return apiClient.get('https://jsonplaceholder.typicode.com/comments?postId=1');
    }
}