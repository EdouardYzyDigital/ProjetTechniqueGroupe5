import express from "express"
import knexfile from "../knexfile.js"
import { Model } from "objection"
import knex from "knex"
import allRoutes from "./routes/allRoutes.js"
import bodyParser from "body-parser"
import swaggerJsdoc from "swagger-jsdoc"
import * as swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger.json" assert {type: "json"}

const app = express()

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
app.use(express.json())
const db = knex(knexfile)
Model.knex(db)
//   definition: {
//     openapi: "3.1.0",
//     info: {
//       title: "MaxAirain Express API with Swagger",
//       version: "0.1.0",
//       description: "This is a simple CRUD API application made with Express and documented with Swagger"
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//       },
//     ],
//   },
//   apis: ["./routes/*.js"],
// };

// const specs = swaggerJsdoc(options);
app.use(
  "/api",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true, customCssUrl:
    "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css", })
);
const port = 3000

allRoutes({ app, db })

app.listen(port, () => {
  console.log("App listening on port : " + port)
})
