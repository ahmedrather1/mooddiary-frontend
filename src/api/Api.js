import axios from "axios";

function Api() {}

Api.prototype.post = async function (path, body) {
  let axiosApi = axios.create();
  axiosApi.defaults.headers.common["Content-Type"] = "application/json";

  try {
    const resp = await axiosApi.post(path, body);
    return resp.data;
  } catch (error) {
    console.log("error data:");
    console.log(error.response.data);
  }
};

Api.prototype.update = async function (path, body) {
  let axiosApi = axios.create();
  axiosApi.defaults.headers.common["Content-Type"] = "application/json";

  try {
    const resp = await axiosApi.put(path, body);
    return resp.data;
  } catch (error) {
    console.log("error data:");
    console.log(error.response.data);
  }
};

Api.prototype.get = async function (path, body) {
  let axiosApi = axios.create();
  axiosApi.defaults.headers.common["Content-Type"] = "application/json";

  try {
    const resp = await axiosApi.get(path, body);
    return resp.data;
  } catch (error) {
    console.log("error data:");
    console.log(error.response.data);
  }
};

export default Api;
