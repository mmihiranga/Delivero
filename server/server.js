const express = require('express')
const cors = require('cors')


const app = express()

// middleware
app.use(cors());
app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/UserRoute')
app.use('/api/user', router)


//port

const PORT = process.env.PORT || 8088

//server
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})