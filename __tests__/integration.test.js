const request = require ('supertest');
const {app,server} = require('../server');
const mockDatabase = require('../mockdatabase');


describe ('integration tests', () => {
    let userId;

    //Shut down the server
    afterAll(async () => {
        await new Promise(resolve => server.close(resolve));
    });

    it('GET/api/users should return all users',async () =>{
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        userId = response.body[0].id;
        expect(userId).toBeDefined();
    });

    it('should return a user by ID', async () => {
        const response = await request(app).get(`/api/users/${userId}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(userId);
    });

    it('Post/ api/users should create a new user', async () => {
        const newUser = {name: 'Charlie', nickname: 'Chuck', age: 30, bio: 'A cool guy',password:'135790'};
        const response = await request(app)
            .post('/api/users')
            .send(newUser);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        userId = response.body.id;
    });

    it('PUT /api/users/:id should update a user by ID', async () => {
        const updatedUser = { name: 'Charlie', nickname: 'Chuck', age: 30, bio: 'A cool guy' ,password:'135790'};
        const response = await request(app)
            .put(`/api/users/${userId}`)
            .send(updatedUser);

        expect(response.status).toBe(200);
        expect(response.text).toBe('User updated successfully');
    });

    it('DELETE /api/users/:id should delete a user by ID', async () => {
        const response = await request(app).delete(`/api/users/${userId}`);
        expect(response.status).toBe(200);
        expect(response.text).toBe('User deleted successfully');
    });
});
