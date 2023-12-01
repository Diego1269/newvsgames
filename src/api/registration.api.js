import axios from "axios";

const regApi = axios.create({
  baseURL: "https://newvsgamesapi-production.up.railway.app/api/v1/registration/",
});

export const registration = (data) => {
    regApi.post("/", data, {
      withCredentials: true
    }).then(res => {
      
    }).catch(err => {
      console.log("Error:", err)
    });
};
