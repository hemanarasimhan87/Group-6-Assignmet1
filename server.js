const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const logic = require('./logic');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to get all users
app.get('/api/users', (req, res) => {
    logic.getAllUsers((error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});

// API route to get a user by ID
app.get('/api/users/:id', (req, res) => {
    logic.getUserById(req.params.id, (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send('User not found');
        }
    });
});

// API route to create a new user
app.post('/api/users', (req, res) => {
    logic.createUser(req.body, (error, results) => {
        if (error) return res.status(500).send(error);
        res.json({ id: results.insertId });
    });
});

// API route to update a user by ID
app.put('/api/users/:id', (req, res) => {
    logic.updateUser(req.params.id, req.body, (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.affectedRows > 0) {
            res.send('User updated successfully');
        } else {
            res.status(404).send('User not found');
        }
    });
});

// API route to delete a user by ID
app.delete('/api/users/:id', (req, res) => {
    logic.deleteUser(req.params.id, (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.affectedRows > 0) {
            res.send('User deleted successfully');
        } else {
            res.status(404).send('User not found');
        }
    });
});
// Start the server
const server = app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

module.exports = { app, server };