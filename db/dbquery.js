const { Pool } = require("pg");
require("dotenv").config();

async function runQuery(query) {
  const connectionString = process.env.uri;
  console.log(connectionString);
  // return 0;
  const pool = new Pool({
    connectionString:
      "postgresql://neondb_owner:y1RtkFbnci0Z@ep-mute-morning-a1nna4p5.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  });

  try {
    const client = await pool.connect();
    const result = await client.query(query);
    client.release();
    console.log("Query executed successfully:\n", query);
    console.log(result.rows);
    return result.rows[0];
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}

async function addToDatabase({ id, output, status }) {
  console.log("Input", id, output);
  const query = `INSERT INTO submissions (id, output , status) VALUES ('${id}', '${output}', ${status})`;
  await runQuery(query);
}
async function getTestcases({ id }) {
  console.log("Input", id);
  const query = `SELECT (input, expected_output) FROM testcases WHERE problem_id = ${id}`;
  await runQuery(query);
}

module.exports = { addToDatabase, getTestcases };
