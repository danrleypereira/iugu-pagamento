import axios from "axios";

// características principais da API, veja MainAPI.ts e HttpClient.ts para entender o objetivo
export default axios.create({
  baseURL: "https://api.iugu.com/v1/",
});
