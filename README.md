# RESTful API with Node.js, Express, and Postgres

Create, read, update, delete in a Node.js app with an Express server and Postgres database.

### [Read the tutorial](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)

## Database

```bash
brew install postgresql
brew services start postgresql
psql postgres
```


```sql
CREATE ROLE me WITH LOGIN PASSWORD 'password';
ALTER ROLE me CREATEDB;
CREATE DATABASE api;
GRANT ALL PRIVILEGES ON DATABASE api TO me;
```

```bash
psql -d api -U me
```

```sql
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');
```

## Installation for Mac

> Currently tested with [Postgres.app](https://postgresapp.com/downloads.html)

Applications are ran with group `wheel` in Mac. Applications and Users in that group have elevated `su` permissions.

## Installation for Windows

> Don't forget to edit `pg_hba.conf` in order to allow server connections to postgres if on the same machine!

```bash
git clone git@github.com:lingqingmeng/node-api-postgres
cd node-api-postgres
npm install
node index.js
```

## Usage

```bash
node index.js -U 'me' -p 'password'
```






## Commands

- GET: `curl http://localhost:3000/users`
- POST: `curl --data "name=Jerry&email=jerry@example.com" http://localhost:3000/users`
- PUT: `curl -X PUT -d "name=George" -d "email=george@example.com" http://localhost:3000/users/1`
- DELETE: `curl -X "DELETE" http://localhost:3000/users/1`

## Author

- [Tania Rascia](https://www.taniarascia.com)

## License

This project is open source and available under the [MIT License](LICENSE).

