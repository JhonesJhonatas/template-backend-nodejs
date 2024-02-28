import 'reflect-metadata'
import '@/shared/container'
import 'dotenv/config'
import 'express-async-errors'

import cors from 'cors'

import express, { NextFunction, Request, Response } from 'express'
import { AppError } from '@/errors/AppError'
import { routes } from '@/routes'

const app = express()
const port = process.env.PORT || 80

app.use(express.json())

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    })
  },
)

app.listen(port, () => {
  console.log(`Server running on port: ${port}. 🚀🚀`)
})
