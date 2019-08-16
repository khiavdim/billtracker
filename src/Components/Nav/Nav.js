import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, login, signup } from "./../../redux/userReducer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  login = () => {
    let { username, password } = this.state;
    this.props.login(username, password);
    this.setState({username: '', password: ''})
  };

  signup = () => {
    let { username, password } = this.state;
    this.props.signup(username, password);
    this.setState({username: '', password: ''})
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    let { username, password } = this.state;
    let { loggedIn, user_id } = this.props.user;
    return (
      <div className="Nav">
        <div className="Nav-Left">
          <h3>COMPENTENCIES</h3>
        </div>
        {!loggedIn ? (
          <div className="Nav-Right">
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="username"
            />
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="password"
            />
            <button onClick={this.login}>Login</button>
            <button onClick={this.signup}>Signup</button>
          </div>
        ) : (
          <div className="Nav-Right">
            <div>
              <Link to="/bills">Bills</Link>
            </div>
            <div>
              <Link to="/friends">Friends</Link>
            </div>
            <div>
              <Link to="/gallery">Gallery</Link>
            </div>
            <div>
              <Link to={`/user/${user_id}`} key={user_id}>
                User</Link>
            </div>
            <div onClick={this.logout}><Link to="/">Logout</Link></div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.user };
}

export default connect(
  mapStateToProps,
  { logout, login, signup }
)(Nav);
