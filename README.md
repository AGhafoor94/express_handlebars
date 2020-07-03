# Node Express Handlebars

## Requirements

- Heroku
- Database in Heroku
- Node Express
- Handlebars

## App

- User can add burger
- Burger can get devoured
- Add to cart for multiple orders?
- List of burgers to devour?

## To Do

- Steps:

#### DATA FLOW

    - Frontend --> Press Devour --> Controller --> Model --> ORM --> Database

# Done

- Set up folders

- Initialized node

- Installed express, handlebars and mysql

- added .gitignore

- Connected to database (burgers_db)

- Added routes

- Added ORM

- Added Database

* Created table (burgers)

  - Columns:
    - id (INT AUTO_INCREMENT NOT NULL PRIMARY KEY),
    - burger_name (VARCHAR(40) NOT NULL),
    - eaten (TINYINT NOT NULL)

* Added Controller

* Public folder

  - CSS
  - Javascript

1.  Database

    - Created Schema for database
    - Created burgers table
    - Made types according to the scheme
    - eaten column set to false by default

2.  Handlebars/express

    - MySql Adapter
    - Setup connection

3.  Splitting connection and ORM

    - MySQL connection in connection.js
    - Methods in orm.js

4.  Set up Routes

    - CRUD
      - GET /burgers (get a burger)
      - POST /api/burgers (create a burger)
      - PUT /api/burgers (eat burger)
      - DELETE /api/burgers (delete burger)

5.  Front End

    - Set up main.handlebars with html template
    - Set up index.handlebars
      - CSS, possible jQuery
      - Form
      - Button to eat
