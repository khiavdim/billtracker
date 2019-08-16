const friends = [
  {
    id: 1,
    first: "Lucy",
    last: "Reed"
  },
  {
    id: 2,
    first: "Sidney",
    last: "Frazier"
  },
  {
    id: 3,
    first: "Betsy",
    last: "Woodard"
  }
];

module.exports = {
  getAllFriends(req, res) {
    res.status(200).send(friends);
  },
  editFriend(req, res) {
    let { id } = req.params;
    let { first, last } = req.query;
    let index = friends.findIndex(friend => friend.id === +id);
    friends[index].first = first;
    friends[index].last = last;
    res.status(200).send(friends);
  }
};
