import express from 'express'
import path from 'path'
import 'express-async-errors'

import './database/connection'
import errorHandler from './errors/handler'

import OrphanageRouter from './routes/routes'

const app = express()

// Para que express reconheça os envios no formato json
app.use(express.json())

app.use(OrphanageRouter)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(4000) 