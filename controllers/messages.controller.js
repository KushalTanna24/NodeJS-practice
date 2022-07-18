const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "Images", "img.jpg"));
  // res.send("<ul><li>Helloo Bois!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages...");
  next();
}

module.exports = {
  getMessages,
  postMessage,
};
