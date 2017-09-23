const express = require('express')
const parser = require('body-parser')
const path = require('path')

const PORT = process.env.port || 3000
const app = express()


app.use(express.static(path.join(__dirname, '../client/public')))


app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Listening to ${PORT}`)
  }
})