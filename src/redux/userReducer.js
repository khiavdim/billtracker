import axios from "axios";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GET_USER";
export const GET_USER_INFO = "GET_USER_INFO";

const initialState = {
  user: {},
  redirect: false,
  error: false
};

export const signup = (username, password) => {
  let data = axios
    .post("/api/signup", {
      username,
      password
    })
    .then(res => res.data);
  return {
    type: SIGNUP,
    payload: data
  };
};

export const login = (username, password) => {
  let data = axios
    .post("/api/login", { username, password })
    .then(res => res.data);
  return {
    type: LOGIN,
    payload: data
  };
};

export const getUser = () => {
  let data = axios.get("/api/user").then(res => res.data);
  return {
    type: GET_USER,
    payload: data
  };
};

export const getUserInfo = user_id => {
  let data = axios.get(`/api/user/${user_id}`).then(res => res.data);
  return {
    type: GET_USER_INFO,
    payload: data
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios.delete("/api/logout")
  };
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case SIGNUP + "_FULFILLED":
      return {
        ...state,
        redirect: false,
        user: payload,
        error: false
      };
    case SIGNUP + "_REJECTED":
      return { ...state, error: payload };
    case LOGIN + "_FULFILLED":
      return {
        ...state,
        user: payload,
        redirect: false,
        error: false
      };
    case LOGIN + "_REJECTED":
      return { ...state, error: payload };
    case LOGOUT + "_FULFILLED":
      return { ...state, user: {}, redirect: true, error: false };
    case GET_USER + "_PENDING":
      return { ...state, redirect: false, error: false };
    case GET_USER + "_FULFILLED":
      return { ...state, user: payload, error: false };
    case GET_USER + "_REJECTED":
      return { ...state, redirect: true, error: payload };
    case GET_USER_INFO + "_FULFILLED":
      return { ...state, user: payload, error: false };
    case GET_USER_INFO + "_REJECTED":
      return { ...state, redirect: true, error: payload };
    default:
      return state;
  }
}
