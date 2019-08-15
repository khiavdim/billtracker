const bcrypt = require("bcrypt");
const saltRounds = 12;

module.exports = {
  async signup(req, res) {
    let { username, password } = req.body;
    const db = req.app.get("db");
    let [existingUser] = await db.get_user(username);
    if (existingUser) return res.status(400).send("Username is already taken");
    let salt = await bcrypt.genSalt(saltRounds);
    let hash = await bcrypt.hash(password, salt);
    let [user] = await db.create_user([username, hash]);
    req.session.user = {
      user_id: user.user_id,
      username: user.username,
      loggedIn: true
    };
    res.send(req.session.user);
    window.alert("Please login with your created username");
  },

  async login(req, res) {
    let { username, password } = req.body;
    const db = req.app.get("db");
    let [existingUser] = await db.get_user(username);
    if (!existingUser) return res.status(401).send("Username not found");
    let result = await bcrypt.compare(password, existingUser.password);
    if (result) {
      req.session.user = {
        user_id: existingUser.user_id,
        username: existingUser.username,
        loggedIn: true
      };
      res.send(req.session.user);
    } else res.status(401).send("Username or password incorrect");
  },

  logout(req, res) {
    req.session.destroy();
    res.sendStatus(200);
  },

  async getUser(req, res) {
    let { username } = req.body;
    const db = req.app.get("db");
    let currentUser = await db.get_user(username);
    res.send(currentUser);
  },

  async getUserInfo(req, res) {
    let { user_id } = req.params;
    const db = req.app.get("db");
    let user = await db.get_user_info(+user_id);
    req.session.user = {
      user_id: user.user_id,
      username: user.username,
      loggedIn: true
    };
    res.send(req.session.user);
  }
};