import React, { Component } from "react";
import "./Users.css";
import { connect } from "react-redux";
import { getUserInfo } from "./../../redux/userReducer";

class Users extends Component {
  componentDidMount() {
    let { getUserInfo } = this.props;
    getUserInfo(+this.props.match.params.user_id);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.user.loggedIn === nextProps.user.loggedIn) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    let { username } = this.props.user;
    return (
      <div className="Users">
        <h1>User ID Using React Router Match Object</h1>
        <div>Current User ID: {this.props.match.params.user_id}</div>
        <div>Current Username: {username}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.user
  };
}

export default connect(
  mapStateToProps,
  { getUserInfo }
)(Users);
