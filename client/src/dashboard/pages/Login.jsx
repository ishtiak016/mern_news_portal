import React, { useContext, useState } from "react";
import { base_url } from "../../config/Config";
import axios from "axios";
import toast from "react-hot-toast";
import storeContext from "../../context/storeContext";
import {useNavigate} from 'react-router-dom'
function Login() {
  const Navigate=useNavigate()
  const { dispatch } = useContext(storeContext);
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const { data } = await axios.post(`${base_url}/api/login`, state);
      setLoader(false);
      localStorage.setItem("newsToken", data.token);
      toast.success(data.message);
      dispatch({
        type: "login_success",
        payload: {
          token: data.token,
        },
      });
    Navigate('/dashboard');
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center ">
      <div className="w-[340px] text-slate-600 shadow-md ">
        <div className="bg-white h-full px-7 py-8 rounded">
          <div className="w-full justify-center items-center flex">
            <img
              className="w-[200px]"
              src="https://khulnanews.live/uploads/logo/logo_61652febf2ead.png"
              alt="logo"
            />
          </div>
          <form onSubmit={submit} className=" mt-8">
            <div>
              <div className="flex flex-col gap-y-2">
                <label
                  className="text-md font-medium text-gray-600"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  value={state.email}
                  required
                  onChange={inputHandle}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 
        focus:border-green-500 h-10"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label
                  className="text-md font-medium text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  required
                  onChange={inputHandle}
                  value={state.password}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="*******"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 
        focus:border-green-500 h-10"
                />
              </div>
            </div>
            <button
              disabled={loader}
              className="mt-4 px-3 w-full py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600"
            >
              {loader ? "loading ..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
