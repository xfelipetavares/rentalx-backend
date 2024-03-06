import express from "express"
import "reflect-metadata"
import swaggerUI from "swagger-ui-express"
import "./database"
import { router } from "./routes"
import "./shared/container"
import swaggerFile from "./swagger.json"

const app = express()

app.use(express.json())
app.use(router)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.listen(3333, () => console.log("server is online!"))
