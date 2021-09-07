import mysql from "mysql";

const db = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "upaya",
  });

export default db;