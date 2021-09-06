const bodyParser = require('body-parser')

const app = require('express')()
app.use(bodyParser.json())

const commits = []

app.get('/commits', (req, res) => {
    res.json({ commits })
})

app.post('/commits', (req, res) => {
    const commitDetails = req.body

    const newCommit = {
        message: commitDetails.subject,
        author: commitDetails.author.name,
        time: "17 hours",
        status: "succeeded",
        hash: commitDetails.commit
    }

    commits.push(newCommit)

    res.status(201).json()
})

module.exports = app