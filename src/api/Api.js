import axios from "axios";

function Api() {}

Api.prototype.post = function (path, body) {
  let axiosApi = axios.create();
  axiosApi.defaults.headers.common["Content-Type"] = "application/json";

  axiosApi.post(path, body).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log("error data:");
      console.log(error.response.data);
    }
  );
};

export default Api;
