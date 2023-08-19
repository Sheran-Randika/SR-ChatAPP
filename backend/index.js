const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r= await axios.put('https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: { "private-key": "75494e2c-4d44-4f37-860c-405ef2223a5b" }})

    return res.status(r.status).json(r.data)
  }catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }

});

app.listen(8080);