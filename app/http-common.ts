import axios from "axios";

export default axios.create({
  // baseURL: "http://api.clovisokonkwo.com:8000/api/",
  baseURL: "http://localhost:4000/api/",
  headers: {
    "Content-type": "application/json"
  }
});
