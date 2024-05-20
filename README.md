# assignment 1

## project description

## Project Structure
project_root/
│
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

## Prerequisites
Make sure you have the following installed:
Node.js
npm (Node Package Manager)
MySQL


## MySQL configuration
### create a MYSQL database
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
   
## Running the Application
- Start the server: node server.js
- Open your browser and navigate to: http://localhost:3000
   



