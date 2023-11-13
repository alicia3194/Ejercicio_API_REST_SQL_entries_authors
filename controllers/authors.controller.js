const {
  createAuthor,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../models/author");

const createAuthorController = async (req, res) => {
  const { name, surname, email, image } = req.body;

  try {
    const newAuthor = await createAuthor({ name, surname, email, image });
    res.status(201).json({
      message: "Autor creado.",
      success: true,
      data: newAuthor,
    });
  } catch (error) {
    console.error(error);
  }
};

const getAuthorsController = async (req, res) => {
  try {
    const authors = await getAuthor();
    res.status(200).json({
      message: "Autores obtenidos.",
      success: true,
      data: authors,
    });
  } catch (error) {
    console.error(error);
  }
};

// [PUT] http://localhost:3000/api/authors/
const updateAuthorController = async (req, res) => {
  const { name, surname, email, image } = req.body;

  try {
    const updatedAuthor = await updateAuthor(email, { name, surname, image });
    res.status(200).json({
      message: `Autor actualizado: ${email}`,
      success: true,
      data: updatedAuthor,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteAuthorController = async (req, res) => {
  const { email } = req.body;

  try {
    const deletedAuthor = await deleteAuthor(email);
    res.status(200).json({
      message: `Autor borrado: ${email}`,
      success: true,
      data: deletedAuthor,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createAuthorController,
  getAuthorsController,
  updateAuthorController,
  deleteAuthorController,
};
