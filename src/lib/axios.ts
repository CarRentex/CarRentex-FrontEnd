import { AxiosError } from "axios";
import TokenService from "../services/TokenService";
import axios from "axios";


const test = "http://localhost:8080/api";



export const axiosInstance = axios.create({
	baseURL: test,
});

  axiosInstance.interceptors.request.use(
    (config) => {
      let token = TokenService.getToken();
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      console.error("Request Interceptor Error", error);
      return Promise.reject(error);
    }
    );2


  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      logErrorResponse(error);
      return Promise.reject(error);
    },
  );



// export const updateAuthHeader = ({token}:{token:string;}) => {
//   axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
// };

// export const removeAuthHeader = () => {
//   delete axiosInstance.defaults.headers.common["Authorization"];
// };

export const logErrorResponse = (error: AxiosError) => {
  if (error.response) {
    console.log("error.response.data", error.response.data);
    console.log("error.response.status", error.response.status);
    console.log("error.response.headers", error.response.headers);
  } else if (error.request) {
    console.log("error.request", error.request);
  } else {
    console.log("error.message", error.message);
  }
  console.log("error.config", error.config);
};