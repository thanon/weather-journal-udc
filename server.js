// Setup empty JS object to act as endpoint for all routes
projectData = {}

// Require these express envi
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')

// Start up an instance of app
const app = express()

/* Middleware*/
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Cors for cross origin allowance
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'))

// GET Route to retrieve projectData
app.get('/api/projectdata', (req, res) => {
  res.status(200).send(projectData)
})

// POST Route to projectData
app.post('/api/projectdata', (req, res) => {
  const {date, temp, content} = req.body
  projectData[date] = {
    temp,
    content,
  }
  res.status(201).send()
})

// Setup Server
app.listen(8000, () => {
  console.log('Running server!')
  console.log(`Running on localhost:8000`)
})
