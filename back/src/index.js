import express from "express"
import knexfile from "../knexfile.js"
import { Model } from "objection"
import knex from "knex"
import allRoutes from "./routes/allRoutes.js"
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
app.use(express.json())
const db = knex(knexfile)
Model.knex(db)
const port = 3000

allRoutes({ app, db })

app.listen(port, () => {
  console.log("App listening on port" + port)
})
