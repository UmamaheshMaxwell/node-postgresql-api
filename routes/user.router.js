const express = require('express');
const router = express.Router();
const User = require("../models/db/user")

router.get("/user", async (req, res) => {    
    const data = await User.findAll()
    res.json(data)
})

router.post("/user", async (req, res) => {
    const body = req.body
    const user = await User.create(body)
    res.json(user)
})

module.exports = router