const axios = require("axios");

exports.getData = () => {
  return axios
    .get("https://api.jsonbin.io/b/5def444d1c19843d88e98ebf")
    .then(response => response.data);
};
