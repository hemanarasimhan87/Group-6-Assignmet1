const users = [
    {id:1, name:'ling', nickname:'ling', age:20, bio: 'I like testing', user_password:'123456'},
    {id:2, name:'hema', nickname:'hema', age:22, bio: 'I like Javascript',user_password:'098765'}
    ];

const getAllUsers = (callback) => {
    callback(null, users);
};

const getUserById = (id, callback) => {
    const user = users.find(user => user.id == id);
    callback(null, user ? [user] : []);
};

const createUser = (user, callback) => {
    user.id = users.length + 1;
    users.push(user);
    callback(null, { insertId: user.id });
};

const updateUser = (id, newUser, callback) => {
    const index = users.findIndex(user => user.id == id);
    if (index !== -1) {
        users[index] = { id, ...newUser };
        callback(null, { affectedRows: 1 });
    } else {
        callback(null, { affectedRows: 0 });
    }
};

const deleteUser = (id, callback) => {
    const index = users.findIndex(user => user.id == id);
    if (index !== -1) {
        users.splice(index, 1);
        callback(null, { affectedRows: 1 });
    } else {
        callback(null, { affectedRows: 0 });
    }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };

