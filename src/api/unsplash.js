import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID DwHFbcUYtYdrR8JUGBHQWWcFmJU9VLsyi61nXFfpU6M",
  },
});
