const db_queries_author = {
  createAuthorTable:
    "CREATE TABLE authors (id_author serial NOT NULL PRIMARY KEY, name varchar(45) NOT NULL, surname varchar(45) NOT NULL, email varchar(100) NOT NULL UNIQUE,image varchar(255));",
  insertAuthorData:
    "INSERT INTO authors(name,surname,email,image) VALUES ('Alejandru','Regex','alejandru@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/75.jpg'),('Birja','Rivera','birja@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/60.jpg'),('Alvaru','Riveru','alvaru@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/45.jpg'),('Muchelle','Wuallus','muchelle@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/women/72.jpg'),('Albertu','Henriques','albertu@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/33.jpg'),('Guillermu','Develaweyer','guillermu@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/34.jpg'),('Jabier','Hespinoza','jabier@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/35.jpg');",
  deleteAuthorTable: "DROP TABLE authors;",
};
module.exports = db_queries_author;
