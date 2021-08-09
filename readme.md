# Checkmate

## Setup

### Postgres
For a straightforward postgres installation + setup, follow [this guide](https://www.sqlshack.com/setting-up-a-postgresql-database-on-mac/).


### Start Project
For easy use, `npm run start` will start both the client and server. I'm using NPM `workspaces` to separate client and server into their own folders. The top-level `package.json` scripts use the `--workspace` flag to set the context for each script
```
npm run migrate
npm run start
```