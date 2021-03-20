import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 4J1SkCE9sgvbmtPiu8W_XTRIQOfrjK5TeQxXEB_WwwE",
  },
});
