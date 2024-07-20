import decode_token from "../../../Utils/index";

const storeReducer = (state, action) => {
  const { type, payload } = action;
  if (action.type === "login_success") {
    state.token = payload.token;
    state.userInfo=decode_token(payload.token);
  }
  return state;
};

export default storeReducer;
