
import path from 'path'
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

app.use(cors({
  origin: "https://chat-app-retry.vercel.app"
}))


import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import dbConnect from "./db/database.js"
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
    dbConnect()
})
