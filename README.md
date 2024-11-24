# Dodos - a MERN TODO app
Dodos is a MERN app that allows you to create, edit and delete tasks.

It implements simple user authentication for per-user task management with a simple REST API to handle requests.

### Usage
First clone this to your local directory by doing:
```
$ git clone https://github.com/xkvd/dodos.git --depth 1
```

After that, enter the directory and run `npm install` in `client` and `server`.

Finally, create a `.env` file in the `server` folder and make sure to set the following variables:
- `MONGODB_URI` - Set to connection string of your MongoDB Atlas instance
- `PORT` - Set to 5000

After this, create two terminals one in `client` and run:
```
client/ $ npm start
```
And the other one in `server` and run:
```
server/ $ npm run dev
```

Running this command would automatically open the react app in your browser.

If not, then open `http://localhost:3000` in your browser to preview the app.
