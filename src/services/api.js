import axios from "axios";

const api = axios.create({
  baseURL: "https://levameulivro-backend.herokuapp.com/",
});

export default api;
