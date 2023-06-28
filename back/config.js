import "dotenv/config"

export default {
  db: {
    client: process.env.DB_CLIENT,
    connection:
      "postgres://lqhijqrd:QKH0ZhfShFJbJk6KKNURpOzSahlq6pQ6@snuffleupagus.db.elephantsql.com/lqhijqrd",
  },
  security: {
    session: {
      secret: process.env.SECURITY_SECRET,
      expiresIn: "2 days",
    },
  },
}