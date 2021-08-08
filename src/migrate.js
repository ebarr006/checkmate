// var postgresMigrations = require("postgres-migrations");
import { migrate } from "postgres-migrations";

async function dbInit() {
  const dbConfig = {
    database: "checkmate",
    user: "admin",
    password: "123123",
    host: "localhost",
    port: 5432,

    // Default: false for backwards-compatibility
    // This might change!
    ensureDatabaseExists: true,

    // Default: "postgres"
    // Used when checking/creating "database-name"
    defaultDatabase: "postgres"
  }

  // await postgresMigrations.migrate(dbConfig, "../migrations")
  await migrate(dbConfig, "migrations")
}

dbInit();