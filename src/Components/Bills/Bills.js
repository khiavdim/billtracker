import React, { Component } from "react";
import "./Bills.css";
import { connect } from "react-redux";
import { getUserBills, addBill } from "./../../redux/billsReducer";
import { getUser } from "./../../redux/userReducer";
import Bill from "./../Bills/Bill";

class Bills extends Component {
  constructor() {
    super();
    this.state = {
      billname: "",
      billamount: ""
    };
  }

  componentDidMount() {
    let { getUserBills } = this.props;
    let { loggedIn, user_id } = this.props.user;
    if (loggedIn) {
      getUserBills(user_id);
    }
  }

  //Componnent Did Update
  componentDidUpdate(prevProps, nextState) {
    if (prevProps !== nextState) {
      let { getUserBills } = this.props;
      let { user_id } = this.props.user;
      getUserBills(user_id);
    }
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addUserBill = () => {
    let { addBill } = this.props;
    let { user_id } = this.props.user;
    let { billname, billamount } = this.state;
    addBill(user_id, billname, billamount);
    this.setState({ billname: "", billamount: "" });
  };

  render() {
    let { loggedIn } = this.props.user;
    let { bills } = this.props;
    let { billname, billamount } = this.state;
    return (
      <div className="Bills">
        <h1>Bills</h1>
        {loggedIn ? (
          <div>
            <div className="Add_Bill_Section">
              <input
                className="bill_info"
                type="text"
                name="billname"
                value={billname}
                placeholder="Enter Bill Name"
                onChange={this.handleChange}
              />
              <input
                className="bill_info"
                type="number"
                name="billamount"
                value={billamount}
                placeholder="Enter Bill Amount"
                onChange={this.handleChange}
              />
              <button onClick={this.addUserBill}>Add Bill</button>
            </div>
            {bills.map(bill => (
              <Bill key={bill.bill_id} bill={bill} />
            ))}
          </div>
        ) : (
          <div>Please log in or register to track your bills</div>
        )}
      </div>
    );
  }
}

//React Redux mapStatetoProps, connect
function mapStateToProps(state) {
  return {
    ...state.user,
    ...state.bills
  };
}

export default connect(
  mapStateToProps,
  { getUserBills, getUser, addBill }
)(Bills);
