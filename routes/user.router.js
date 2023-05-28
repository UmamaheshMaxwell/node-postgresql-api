const express = require('express');
const router = express.Router();
const User = require("../models/db/user")
const { sequelize } = require("../models/db/db");

router.get("/user", async (req, res) => {    
    const data = await User.findAll({ order: [[sequelize.literal('"updatedAt"'), 'DESC']]})
    res.json(data)
})

router.post("/user", async (req, res) => {
    const body = req.body
    const user = await User.create(body)
    res.json(user)
})

module.exports = router