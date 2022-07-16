const express = require('express')
const notes = require('./data/notes')


const app = express()


app.get('/', (req, res) => {
    res.send('Hello chawal')
})

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const note=notes.find((n)=> n._id===id)

  res.send(note);
});

app.listen(3000, () => {
    console.log('Server Listening at port 3000')
})