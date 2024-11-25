# dodos - A bare bones multi-user TODO app
Dodos is a multi-user TODO app that allows you manage your todos with CRUD.

It allows you to also manage your tasks per-user, meaning each user has
different tasks per request.

### Architecture
For frontend, Vanilla React with HTML+CSS is used for the styling.

No styling frameworks are required nor used.

For the backend, Express.js handles the routing with a basic authentication middleware handling user logic.

Mongoose is used to manage schemas and data with the help of MongoDB.

### Usage
To run the program, simply run the `start.bat` (Windows) or `start.bash` (Linux/MacOS) in the `build` directory.

This would automatically install the required dependencies, and start the client
and server port after which it would automatically open the front-end app.

To interact with the backend, you can use a API client such as Postman or Insomnia
to send requests to the API.

Some filtering and input validation is implemented to ensure validity of data, however
it isn't anything production-grade as this is my first project.