import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://art-x-server.vercel.app",
});

const useAxios = () => {
  return [axiosSecure];
};

export default useAxios;
