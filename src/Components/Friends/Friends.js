import React, { Component } from "react";
import "./Friends.css";
import axios from "axios";
import Friend from "./Friend";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      first: "",
      last: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/friends/")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log("Error from server", err);
      });
  }

  editFriend = (id, friend) => {
    let { first, last } = friend;
    axios
      .put(`/api/friends/${id}?first=${first}&last=${last}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log("Could not update friend", err);
      });
  };

  render() {
    let { friends } = this.state;
    return (
      <div className="Friends">
        <h1>Edit Friends Using RESTful Queries</h1>
        <div>
          {friends.map(friend => {
            return (
              <Friend
                key={friend.id}
                friend={friend}
                editFriend={this.editFriend}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Friends;
