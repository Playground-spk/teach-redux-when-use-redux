import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
  (config) => {
    if (config.url.includes("/login")) return config;
    const serializedData = localStorage.getItem("store");
    const extractData = JSON.parse(serializedData);
    const token = extractData?.user?.token;

    config.headers["Authorization"] = `Bearer ${token} `;
    return config;
  },
  (error) => {
    throw error;
  }
);

export default axios;
