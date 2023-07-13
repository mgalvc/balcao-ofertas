import express from 'express'

// TODO add logging

const app = express()
const port = 3000 // TODO make it an env var

app.get('/healthcheck', (req, res) => {
	res.send({
		healthy: true,
		timestamp: new Date().toUTCString()
	})
})

app.get('/offers', (req, res) => {

})

app.post('/offers', (req, res) => {

})

app.delete('/offers', (req, res) => {

})

app.post('/buy', (req, res) => {
	
})

app.listen(port, () => {
	console.log(`running at ${port}`)
})