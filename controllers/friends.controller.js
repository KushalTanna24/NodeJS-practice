const model = require("../models/friends.model");

const postFriend = (req, res) => {
  const friend = req.body;
  friend.id = model.length + 1;
  model.push(friend);
  res.json(friend);
};

const getFriends = (req, res) => {
  res.json(model);
};

const getFriend = (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = model.find((friend) => friend.id === friendId);
  if (friend) {
    res.json(friend);
  }
  res.status(404).json({
    error: "Friend not found",
  });
};

const removeFriend = (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = model.find((friend) => friend.id === friendId);
  if (friend) {
    model.splice(model.indexOf(friend), 1);
    res.json(model);
  }
  res.status(404).json({
    error: "Friend not found",
  });
};

module.exports = {
  postFriend,
  getFriends,
  getFriend,
  removeFriend,
};
