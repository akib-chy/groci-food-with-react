import axios from "axios";

const axiosPrivet = axios.create({});
axiosPrivet.interceptors.request.use(
  function (config) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosPrivet.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
    }
    return Promise.reject(error);
  }
);
export default axiosPrivet;
