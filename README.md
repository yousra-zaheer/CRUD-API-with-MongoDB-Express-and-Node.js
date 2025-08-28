# CRUD-API-with-MongoDB-Express-and-Node.js

The main theme of this code is to create a simple API that interacts with a MongoDB database to perform CRUD (Create, Read, Update, Delete) operations on a "person" document.
Key Features
1. Connecting to MongoDB: The code connects to a MongoDB database using the connectDB function imported from ./configuration/db.js.
2. Defining Routes: The code defines four routes:
    - GET /: A simple route that returns a "Hello MongoDB" message.
    - POST /person: Creates a new person document in the database.
    - PUT /person: Updates an existing person document in the database.
    - DELETE /person/:id: Deletes a person document from the database.

Data Flow
The code uses the following data flow:

1. Request: The client (e.g., Postman) sends a request to the API with the required data.
2. Processing: The API processes the request and interacts with the MongoDB database using the person model.
3. Response: The API sends a response back to the client with the result of the operation.

Other Files
two other files are:

1. ./configuration/db.js: The purpose of this file is to provide a reusable function (connectDB) that can be used to connect to a MongoDB database in a Node.js application.
2. ./models/person.js: The purpose of this file's code is to provide a structured way of interacting with "person" documents in a MongoDB database.

 The code builds a RESTful API with Express.js and MongoDB.
