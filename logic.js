const db = require('./database');

// Function to retrieve all users from the database
const getAllUsers = (callback) => {
    db.query('SELECT * FROM users', callback);
};

// Function to retrieve a user by ID from the database
const getUserById = (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

// Function to create a new user in the database
const createUser = (user, callback) => {
    db.query('INSERT INTO users SET ?', user, callback);
};

// Function to update an existing user in the database
const updateUser = (id, userValues, callback) => {
    const {name, nickname,age,bio, password} = userValues;
    const sql = 'UPDATE users SET name = ?, nickname = ?, age = ?, bio = ? ,user_password = ? WHERE id = ?';
    db.query(sql, [name,nickname,age,bio,user_password,id], callback);
};
    
// Function to delete a user from the database
const deleteUser = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
