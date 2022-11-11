import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const user = JSON.parse(localStorage.getItem("user"));

// const token = user?.bearerToken || "2|T2ZtlYOYlEFY8AO49dK44QribqsGW8zNVEk6lpS5";
const token = user?.bearerToken;
if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  delete instance.defaults.headers.common["Authorization"];
}

export default instance;
