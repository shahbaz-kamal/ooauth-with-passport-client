import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  return axiosInstance;
};

export default UseAxiosSecure;
