import Axios from "axios";
import { API_KEY } from "../globalconfig";

const API_Requisition = () => {
    Axios({
        method:'get',
        url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-07&end_date=2018-09-08&api_key=${API_KEY}`,
      })
        .then(function(response) {
        console.log("response", response)
      });}

export default API_Requisition;
