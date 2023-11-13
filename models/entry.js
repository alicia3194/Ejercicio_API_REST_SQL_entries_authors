const db_queries_entries = require("../queries/entry.queries");

const pool = require("../config/db_pgsql");

// READ
// const getEntriesByEmail = async (email) => {
//   let client, result;
//   try {
//     client = await pool.connect(); // Espera a abrir conexion
//     const data = await client.query(db_queries_entries.getEntriesByEmail, [
//       email,
//     ]);
//     result = data.rows;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   } finally {
//     client.release();
//   }
//   return result;
// };

// READ
const getEntries = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(db_queries_entries.getEntries);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) {
      client.release();
    }
  }
  return result;
};

const updateEntryByTitle = async (title, newEntryData) => {
  const { content, date, category } = newEntryData;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(db_queries_entries.updateEntryByTitle, [
      title,
      content,
      date,
      category,
      title,
    ]);
    result = data.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const deleteEntryByTitle = async (title) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(db_queries_entries.deleteEntryByTitle, [
      title,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};
// CREATE
// const createEntry = async (entry) => {
//   const { title, content, email, category } = entry;
//   let client, result;
//   try {
//     client = await pool.connect(); // Espera a abrir conexion
//     const data = await client.query(db_queries_entries.createEntry, [
//       title,
//       content,
//       email,
//       category,
//     ]);
//     result = data.rowCount;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   } finally {
//     client.release();
//   }
//   return result;
// };

// DELETE
//UPDATE

const entries = {
  //   getEntriesByEmail,
  getEntries,
  updateEntryByTitle,
  deleteEntryByTitle,
  //   createEntry,
  //deleteEntry
  //updateEntry
};

module.exports = entries;
