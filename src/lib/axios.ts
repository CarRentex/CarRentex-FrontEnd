import Axios, { AxiosError } from "axios";

export const baseApi = process.env.NEXT_PUBLIC_API_URL + "/";

const test = "http://localhost:8080/api";


export const axiosInstance = getAxiosInstance();

function getAxiosInstance() {
  const instance = Axios.create({
    baseURL: test,
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config) => config,
    function (error) {
      // On request error
      logErrorResponse(error);
      return Promise.reject(error);
    },
  );

  // Response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Default
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      logErrorResponse(error);
      return Promise.reject(error);
    },
  );

  return instance;
}

export const updateAuthHeader = ({ token }: { token: string }) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthHeader = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export const logErrorResponse = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("error.response.data", error.response.data);
    console.log("error.response.status", error.response.status);
    console.log("error.response.headers", error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("error.request", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("error.message", error.message);
  }
  console.log("error.config", error.config);
};