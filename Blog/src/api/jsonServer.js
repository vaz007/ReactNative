import axios from "axios";

// Update Url according to ngrok
export default axios.create({
  baseURL: "http://416d956d.ngrok.io",
});
