import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { router } from './router'

const app = express()

app.use(express.json())
app.use(cors({
  // origin: 'http://client-domain.com'
}))
app.use(router)

const port = 3000

app.listen(port, () => console.log(`🚀 Server running on port ${port}`))