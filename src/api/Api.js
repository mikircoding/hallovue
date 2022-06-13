import axios from "axios";

const Api = axios.create({
  //set api url
  baseURL: "https://api.nurulfikri.id/api/",
});

export default Api;
