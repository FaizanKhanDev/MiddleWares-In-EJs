import express from 'express';
import web from "./routes/web.js";

const app = express()
const port = process.env.PORT || "3000"

app.set('views engine', "ejs")
app.use('/', web)


app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`)
})
