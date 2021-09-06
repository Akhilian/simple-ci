const bodyParser = require('body-parser')

const app = require('express')()
app.use(bodyParser.json())

const commits = [
    {
        message: "📝 Create the backlog documentation",
        author: "Akhilian",
        time: "16 hours ",
        status: "planned",
        hash: "634d3b9f96a8b3d0f0504a52cb02599159304541"
    },
    {
        message: "🐛 Fix rights on the git server so we can push",
        author: "Akhilian",
        time: "16 hours",
        status: "running",
        hash: "3b4c25fa216f9ed4f0d7559335639ecd89504f98"
    },
    {
        message: "✨ Add docker-compose file and some documentation",
        author: "Akhilian",
        time: "16 hours",
        status: "failed",
        hash: "f95027a23dd9b22559cfcfc3cd8fd85372f43937"
    },
    {
        message: "✨ Create a Docker image with SSH connexion and basic git server",
        author: "Akhilian",
        time: "17 hours",
        status: "succeeded",
        hash: "8ac2043e1d2a4fc25bf5967e3c3c8155d305a445"
    }
]

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