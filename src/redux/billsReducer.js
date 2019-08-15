import axios from "axios";

export const GET_USER_BILLS = "GET_USER_BILLS";
export const ADD_BILL = "ADD_BILL";
export const EDIT_BILL = "GET_BILL";
export const DELETE_BILL = "DELETE_BILL";

const initialState = {
  bills: [],
  error: false
};

export function getUserBills(user_id) {
  let data = axios.get(`/api/bills/${user_id}`).then(res => res.data);
  return {
    type: GET_USER_BILLS,
    payload: data
  };
}

export function editBill(bill_id, newBill, newAmount) {
  let data = axios.put(`/api/bills/${bill_id}`, {newBill, newAmount}).then(res => res.data);
  return {
    type: EDIT_BILL,
    payload: data
  };
}

export function addBill(bill_user, billname, billamount ) {
  let data = axios
    .post(`/api/bills`, { bill_user, billname, billamount })
    .then(res => res.data);
  return {
    type: ADD_BILL,
    payload: data
  };
}

export function deleteBill(bill_id) {
  let data = axios.delete(`/api/bills/${bill_id}`).then(res => res.data);
  return {
    type: DELETE_BILL,
    payload: data
  };
}

export default function billsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_USER_BILLS + "_FULFILLED":
      return { bills: payload, error: false };
    case GET_USER_BILLS + "_REJECTED":
      return { ...state, error: payload };
    case ADD_BILL + "_FULFILLED":
      return { ...state, bills: payload };
    case EDIT_BILL + "_FULFILLED":
      return { ...state, bills: payload };
    case DELETE_BILL + "_FULFILLED":
      return { ...state, bills: payload };
    default:
      return state;
  }
}
