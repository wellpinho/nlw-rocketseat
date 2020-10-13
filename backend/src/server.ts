import express from 'express'

import './database/connection'

import OrphanageRouter from './routes/routes'

const app = express()

// Para que express reconheça os envios no formato json
app.use(express.json())

app.use(OrphanageRouter)


app.listen(4000) 