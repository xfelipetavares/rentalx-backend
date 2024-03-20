import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import "reflect-metadata"
import swaggerUI from "swagger-ui-express"
import "./database"
import { router } from "./routes"
import "./shared/container"
import swaggerFile from "./docs/api/swagger.json"
import { AppError } from "./errors/appError"

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use(router)
app.use((err: Error, _request: Request, response: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ status: "error", message: err.message })
  }

  return response.status(500).json({ status: "error", message: "Internal server error" })
})

app.listen(3333, () => console.log("server is online!"))
