//Axios for request
import axios from "axios";

export function getComicFromURL(data) {
  return axios({
    method: "GET",
    url: `/${data.randomNumber}/info.0.json`,
    validateStatus: null,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
