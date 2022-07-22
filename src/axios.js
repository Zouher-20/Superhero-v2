import axios from "axios";

const ins = axios.create({
  baseUrl: "",
  Headers: {
    "access-allow-origin": "*",
  },
  validateStatus: () => true,
});
export default ins;
