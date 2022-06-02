//Axios for request
import axios from "axios";

export function getComicFromURL(data) {
  return axios({
    method: "GET",
    url: `/${data.randomNumber}/info.0.json`,

    validateStatus: null,
    // mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
