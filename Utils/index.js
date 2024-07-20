import { jwtDecode } from "jwt-decode";

const decode_token = (token) => {
  if (token) {
    try {
      const Decoded_token = jwtDecode(token);
      const exp = new Date(Decoded_token.exp * 1000);
      if (new Date() > exp) {
        localStorage.removeItem("newstoken");
        return "";
      } else {
        return decode_token;
      }
    } catch (error) {
      return "";
    }
  } else {
    return "";
  }
};
export default decode_token;