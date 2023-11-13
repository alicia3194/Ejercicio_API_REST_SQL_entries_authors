const db_queries_entries = {
  createEntriesTable:
    "CREATE TABLE entries (id_entry serial NOT NULL PRIMARY KEY, title varchar(100) NOT NULL UNIQUE, content text NOT NULL, date date DEFAULT CURRENT_DATE,id_author int,category varchar(15),FOREIGN KEY (id_author) REFERENCES authors(id_author));",
  insertEntriesData:
    "INSERT INTO entries(title,content,id_author,category)VALUES ('Noticia: SOL en Madrid','Contenido noticia 1',(SELECT id_author FROM authors WHERE email='alejandru@thebridgeschool.es'),'Tiempo'),('Noticia: Un panda suelto por la ciudad','El panda se comió todas las frutas de una tienda',(SELECT id_author FROM authors WHERE email='birja@thebridgeschool.es'),'Sucesos'),('El rayo gana la champions','Victoria por goleada en la final de la champions',(SELECT id_author FROM authors WHERE email='albertu@thebridgeschool.es'),'Deportes'),('Amanece Madrid lleno de arena','La calima satura Madrid de arena. Pérdidas millonarias',(SELECT id_author FROM authors WHERE email='birja@thebridgeschool.es'),'Sucesos'),('Descubren el motor de agua','Fin de la gasolina. A partir de ahora usaremos agua en nuestros coches',(SELECT id_author FROM authors WHERE email='alvaru@thebridgeschool.es'),'Ciencia');",
  deleteEntriesTable: "DROP TABLE entries;",
  getEntries:
    "SELECT entries.title, entries.content, entries.date, entries.category, authors.name, authors.surname, authors.image FROM entries INNER JOIN authors ON entries.id_author = authors.id_author;",
  updateEntryByTitle:
    "UPDATE entries SET title = $1, content = $2, date = $3, category = $4 WHERE title = $5 RETURNING *;",
  deleteEntryByTitle: "DELETE FROM entries WHERE title = $1;",
};

module.exports = db_queries_entries;
