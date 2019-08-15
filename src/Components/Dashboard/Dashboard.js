import React, { Component } from "react";
import './Dashboard.css'
import { connect } from "react-redux";
import { getUser } from "./../../redux/userReducer";

class Dashboard extends Component {
  componentDidMount() {
    let { getUser } = this.props;
    getUser()
  }

  render() {
    let { loggedIn, username } = this.props.user;
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        {loggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <p>To view/modify your bills, please use the navigation above</p>
          </div>
        ) : (
          <div>Please log in or register</div>
        )}
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
  { getUser }
)(Dashboard);
