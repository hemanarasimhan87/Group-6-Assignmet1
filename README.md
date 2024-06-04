# assignment 1-Group 6
The memebers in group 6 : Lingling wang, Hema, Anastas, swarnalatha

## Project Structure

project_root/
│── __test__/
    ├── __logic.test.js__
    ├── __integration.test.js__
├── public/
│   ├── scripts/
│   │   ├── listUsers.js
│   │   ├── userProfile.js
│   │   ├── editUser.js
│   │   └── createUser.js
│   ├── style.css
│   ├── index.html
│   ├── user.html
│   ├── edit.html
│   └── create.html
│
├── server.js
├── logic.js
├── database.js
├─ .env
├── mockdatabase.js
├── package.json
└── package-lock.json
   
## Running the Application
- Start the server: node server.js
- Open your browser and navigate to: http://localhost:3000

### Prerequisites for running the application
Make sure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MySQL

### MySQL configuration -  create a MYSQL database
CREATE DATABASE loginDB;
   USE loginDB;
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       nickname VARCHAR(255) NOT NULL,
       age INT NOT NULL,
       bio TEXT NOT NULL
   );
### Set up MySQL environment variables
 Create a `.env` file in the root directory of the project and add the following content:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=loginDB

## Running the __test__

### Prerequisites for running the application
- Make sure you have the following installed: jest
- Ensure that you have added the dependence in the "package.json"
"scripts": {
    "test": "jest",
    "test:unit": "jest __tests__/unit",
    "test:integration": "jest __tests__/integration",
    "test:e2e": "jest __tests__/e2e",
    "start": "node server.js"
  },
    "devDependencies": {
    "jest": "^29.7.0",
    "supertest": "^7.0.0"}

### Running the __test__
- Before run the Application, you should change the "DB_TYPE=mysql" in the "env" file.
- Before run the test, ypou should change the "DB_TYPE=mock" in the "env" file.
   


