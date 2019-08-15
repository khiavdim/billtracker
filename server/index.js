require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const userCtrl = require("./controllers/userController");
const authCheck = require("./middleware/authCheck");
const billsCtrl = require("./controllers/billsController");

//middleware 
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.listen(SERVER_PORT, () =>
  console.log(`Server listening from ${SERVER_PORT}`)
);

//user endpoints
app.post("/api/signup", userCtrl.signup);
app.post("/api/login", userCtrl.login);
app.get("/api/user", authCheck, userCtrl.getUser);
app.get('/api/user/:user_id', userCtrl.getUserInfo)
app.delete("/api/logout", userCtrl.logout);

//bills endpoints
app.get("/api/bills/:user_id", billsCtrl.getUserBills);
app.post("/api/bills/", billsCtrl.addBill);
app.delete("/api/bills/:bill_id", billsCtrl.deleteBill);
app.put("/api/bills/:bill_id", billsCtrl.editBill);


//Serves static files such as images, CSS files, and JS files. 
//This would serve images, CSS files, and JS files found in the directory named public. 
//Static files are files that the client downloads from the server.
app.use(express.static('public'));