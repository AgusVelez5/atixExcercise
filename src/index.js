require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000; 
const router = express.Router();
const routes = require("./application/routes/routes");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

router.use("/", routes);

app.use(router);

app.listen(port, () => {
  console.log("Express Listening at http://localhost:" + port);
});
