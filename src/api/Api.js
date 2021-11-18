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

Api.prototype.get = async function (path, body, config) {
  let axiosApi = axios.create();
  let headers = { "Content-Type": "application/json" };
  //axiosApi.defaults.headers.common["Content-Type"] = "application/json";
  console.log("from api " + config.headers[0].header);
  config?.headers?.forEach((x) => {
    //axiosApi.defaults.headers.common[x.header] = x.headerVal;
    let header = x.header;
    let headerVal = x.headerVal;
    headers[header] = headerVal;
  });

  console.log(headers);

  try {
    const resp = await axiosApi.get(path, body);
    return resp.data;
  } catch (error) {
    console.log("error data:");
    console.log(error.response.data);
  }
};

export default Api;
