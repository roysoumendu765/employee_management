const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5001
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(bodyparser.json());
app.use('/' , (req, res) => {
    res.json({message: "Working"})
})

app.listen(PORT, () => {
    console.log("Server up and running", PORT);
})