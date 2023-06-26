import "dotenv/config"

export default {
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "maxairain",
    },
  },
  security: {
    session: {
      secret: process.env.SECURITY_SECRET,
      expiresIn: "2 days",
    },
  },
}
