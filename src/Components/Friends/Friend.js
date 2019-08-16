import React, { Component } from "react";
import "./Friends.css";

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: ""
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  saveEdit = e => {
    this.props.editFriend(this.props.friend.id, this.state);
  };

  render() {
    let { friend } = this.props;
    let { first, last } = this.state;
    return (
      <div className="Friend">
          <div>
        <p>
          {friend.first} {friend.last}
        </p>
        <input
          value={first}
          name="first"
          placeholder="Edit First Name"
          onChange={this.handleChange}
        />
        <input
          value={last}
          name="last"
          placeholder="Edit Last Name"
          onChange={this.handleChange}
        />
        <button onClick={this.saveEdit}>Submit Changes</button>
      </div>
      </div>
    );
  }
}

export default Friend;
