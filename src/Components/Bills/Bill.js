import React, { Component } from "react";
import "./Bills.css";
import { connect } from "react-redux";
import { editBill, deleteBill } from "./../../redux/billsReducer";

class Bill extends Component {
  constructor(props) {
    super();
    this.state = {
      showEdit: false,
      newBill: props.bill.billname,
      newAmount: props.bill.billamount
    };
  }

  flipEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  editUserBill = () => {
    let { editBill } = this.props;
    let { bill_id } = this.props.bill;
    let { newBill, newAmount } = this.state;
    editBill(bill_id, newBill, newAmount);
    this.setState({ showEdit: false });
  };

  deleteUserBill = () => {
    let { deleteBill } = this.props;
    let { bill_id } = this.props.bill;
    deleteBill(bill_id);
    this.setState({ showEdit: false });
  };

  render() {
    let { billname, billamount } = this.props.bill;
    let { showEdit, newAmount, newBill } = this.state;
    return (
      <div className="Bill">
        {!showEdit ? (
          <div>
            <div className="bill_info">{billname}</div>
            <div className="bill_info">Amount Due: ${billamount}.00</div>
            <div>
              <button onClick={this.flipEdit}>Edit Bill</button>
              <button onClick={this.deleteUserBill}>Delete Bill</button>
            </div>
          </div>
        ) : (
          <div>
            <input
              className="bill_info"
              type="text"
              name="newBill"
              value={newBill}
              placeholder={billname}
              onChange={this.handleChange}
            />
            <input
              className="bill_info"
              type="number"
              name="newAmount"
              value={newAmount}
              placeholder={billamount}
              onChange={this.handleChange}
            />
            <div>
              <button onClick={this.flipEdit}>Cancel Edit</button>
              <button onClick={this.editUserBill}>Save Changes</button>
              <button onClick={this.deleteUserBill}>Delete Bill</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { editBill, deleteBill }
)(Bill);
