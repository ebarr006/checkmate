var { migrate } = require('postgres-migrations');

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
    defaultDatabase: "postgres"
  }

  await migrate(dbConfig, "migrations")
}

dbInit();