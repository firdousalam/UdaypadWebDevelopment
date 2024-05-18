const express = require('express');

const app = express()
const port = 5000

app.get('/uadaypad', (req, res) => {
  res.send('Hello UdayPad! ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})