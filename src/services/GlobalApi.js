import axios from "axios";


// const BASE_URL='http://localhost:1337/api';
const BASE_URL='http://localhost:1337/api'

 const getPost = () => axios.get(BASE_URL+'/food-menus?populate=*');
// const postData=axios.post(BASE_URL+'/blog-apps');
// const postById=(id)=>axios.post(BASE_URL+'/blog-apps/'+id);

export const getPostById=(id)=>axios.get(BASE_URL+'/food-menus/'+id+'?populate=*');


export default {
    getPost
}

