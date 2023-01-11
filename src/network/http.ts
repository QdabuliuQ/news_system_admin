import axios from "axios";

const $http = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  headers: { 
    'content-type': 'application/x-www-form-urlencoded',
    'Authorization': localStorage.getItem('token') ?? '' 
  },
  timeout: 5000,
})


export default $http 