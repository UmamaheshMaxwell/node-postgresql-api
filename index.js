const express = require("express")
const cors = require("cors")
const router = require("./routes/user.router")
const app = express()

app.use(cors())
app.use(express.json())

router.get("/",(req, res) => {
    res.send("Welcome to Node API ")
})

app.use("/api", router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT} sucessfully !!!`)
})