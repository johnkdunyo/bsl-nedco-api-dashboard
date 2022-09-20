import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://20.31.249.135/api/v1.0'
  });

//   check if there is a valid token in the localstorage
// const token = localStorage.getItem('user_token');
const token = "2|T2ZtlYOYlEFY8AO49dK44QribqsGW8zNVEk6lpS5"
if(token){
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}else{
    delete instance.defaults.headers.common['Authorization'];
}
// that's all,so if there's no token we not adding any auth to the headers


  export default instance;