const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./Data Base/connect')
require('dotenv').config()
const notFound = require('./middelware/not-found')
const errorHanderMiddleware = require('./middelware/error-handler')
// middleware 
app.use(express.static('./public'))
app.use(express.json())



// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHanderMiddleware);

const port = process.env.PORT || 5500;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }
}

start()

