const connectTOMongo = require('./db');
const express = require('express');

connectTOMongo();

const app = express()
const port = 8000

app.use(express.json())


// Available Routes....

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`SKYNotE app Backend is Ready on port ${port}`)
})