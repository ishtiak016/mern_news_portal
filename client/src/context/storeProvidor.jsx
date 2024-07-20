import React, { useReducer } from "react";
import storeReducer from "./storeReducer";
import StoreContext from "./storeContext";
import decode_token from "../../../Utils/index";
function storeProvidor({ children }) {
  console.log("xxx"+decode_token(localStorage.getItem("newstoken")));
  const [store, dispatch] = useReducer(storeReducer, {
    userInfo: decode_token(localStorage.getItem("newstoken")),
    token: localStorage.getItem("newstoken") || "",
  });
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default storeProvidor;
