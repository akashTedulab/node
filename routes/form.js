const express = require('express');
const router = express.Router();

router.post('/login', (req, res)=>{
  const username = req.body.username;
  const password = req.body.password;

  if(username == "admin" && password == "admin"){
    res.send("Success")
  } else {
    res.sendStatus(401);
  }
})

module.exports = router;