const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config.js');
const app = express();
const port = 3002;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Add a route to handle GET requests for fetching data
app.get('/mahasiswa', (req, res) => {
    db.query('SELECT * FROM tb_mahasiswa', (error, result) => {
        if (error) {
            // Handle any errors that might occur
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        } else {
            // Log the result to the console for debugging
            console.log(result);

            // Send the result as the response
            res.send(result);
        }
    });
});


app.post('/data', (req, res) => {
  console.log({ RequestFromOutside: req.body });
  res.send('Login berhasil');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

