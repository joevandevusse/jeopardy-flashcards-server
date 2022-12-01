const pgp = require("pg-promise")();
const connectionString =  "postgresql://joevandevusse:whombovb2508@127.0.0.1:5432/joevandevusse";
const db = pgp(connectionString);

module.exports = db;
