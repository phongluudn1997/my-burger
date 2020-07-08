import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-70e44.firebaseio.com/",
});

export default instance;
