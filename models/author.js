const db_queries_author = require("../queries/author.queries");
const pool = require("../config/db_pgsql");

// READ
const getAllAuthors = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(db_queries_author.getAllAuthors);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// READ
const getAuthorByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(db_queries_author.getAuthorByEmail, [
      email,
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

// CREATE
const createAuthor = async (author) => {
  const { name, surname, email, image } = author;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(db_queries_author.createAuthor, [
      name,
      surname,
      email,
      image,
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

// UPDATE
const updateAuthor = async (author) => {
  const { name, surname, email, image } = author;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(db_queries_author.updateAuthor, [
      name,
      surname,
      image,
      email,
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

// DELETE
const deleteAuthor = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(db_queries_author.deleteAuthor, [email]);
    result = data.rowCount;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

module.exports = {
  getAllAuthors,
  getAuthorByEmail,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
