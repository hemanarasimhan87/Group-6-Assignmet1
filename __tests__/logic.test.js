const db = require('../database');

const {
     getAllUsers, getUserById, createUser, updateUser, deleteUser 
    } = require('../logic');

jest.mock('../database', () => {
    return {
        query: jest.fn()
    };
});


describe('User Database Operations', () => {
    beforeEach(() => {
        db.query.mockClear();
    });

    it('should retrieve all users', (done) => {
        const mockUsers = [
            {id: 1, name: 'ling', nickname: 'ling', age: 20, bio: 'I like testing',password:'123456'},
            {id: 2, name: 'hema', nickname: 'hema', age: 22, bio: 'I like Javascript',password:'098765'}
        ];
        db.query.mockImplementation((query, callback) => {
            callback(null, mockUsers);
        });

        getAllUsers((err, users) => {
            expect(err).toBeNull();
            expect(users).toEqual(mockUsers);
            done();
        });
    });

    it('should retrieve a user by ID', (done) => {
        const mockUser = {id: 1, name: 'ling', nickname: 'ling', age: 20, bio: 'I like testing',password:'123456'};
        db.query.mockImplementation((query, params, callback) => {
            callback(null, [mockUser]);
        });

        getUserById(1, (err, users) => {
            expect(err).toBeNull();
            expect(users).toEqual([mockUser]);
            done();
        });
    });

    it('should return an empty array when user ID is not found', (done) => {
        db.query.mockImplementation((query, params, callback) => {
            callback(null, []);
        });

        getUserById(999, (err, users) => {
            expect(err).toBeNull();
            expect(users).toEqual([]);
            done();
        });
    });

    it('should create a new user', (done) => {
        const newUser = { name: 'Charlie', nickname: 'Chuck', age: 30, bio: 'A cool guy' ,password:'135790'};
        db.query.mockImplementation((query, user, callback) => {
            callback(null, { insertId: 3 });
        });

        createUser(newUser, (err, result) => {
            expect(err).toBeNull();
            expect(result).toEqual({ insertId: 3 });
            done();
        });
    });

    it('should update an existing user', (done) => {
        db.query.mockImplementation((query, params, callback) => {
            callback(null, { affectedRows: 1 });
        });

        const updatedUser = { name: 'Alice', nickname: 'Ali', age: 25, bio: 'A nice person',password:'235790' };
        updateUser(1, [updatedUser.name, updatedUser.nickname, updatedUser.age, updatedUser.bio], (err, result) => {
            expect(err).toBeNull();
            expect(result).toEqual({ affectedRows: 1 });
            done();
        });
    });

    it('should delete a user', (done) => {
        db.query.mockImplementation((query, params, callback) => {
            callback(null, { affectedRows: 1 });
        });

        deleteUser(1, (err, result) => {
            expect(err).toBeNull();
            expect(result).toEqual({ affectedRows: 1 });
            done();
        });
    });
});