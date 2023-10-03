// set up yang dibutuhkan pada file index.js di main
const { Router } = require('express')
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const {userRouter} = require("./Router")

app.use("/", userRouter)

app.use((err, req, res, next) => {
    const statusCode = err.status || 500
    const statusMessage = err.message || 'Error'

    return res.status(statusCode).send({
        isError: true,
        message: statusMessage,
        data: null
    })
})

app.listen(3004, () => {
    console.log('server ini berhasil dijalankan');
})