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

- Add routes

- Add ORM

- Add Database

* Create table (burgers)

  - Columns: id (INT AUTO_INCREMENT NOT NULL PRIMARY KEY), burger_name (VARCHAR(40) NOT NULL), devoured (TINYINT NOT NULL)

* Add Controller

* Public folder

  - CSS
  - jQuery/Javascript?

* Steps:

  1.  Database

      - Create Schema for database
      - Create burgers table
      - Make types according to the scheme
      - devoured column set to false by default

  2.  Handlebars/express

      - MySql Adapter
      - Setup connection

  3.  Splitting connection and ORM

      - MySQL connection in connection.js
      - Methods in orm.js

  4.  Set up Routes

      - CRUD
        - GET /burgers (get a burger)
        - POST /burgers (create a burger)
        - PUT /burgers (devour burger)

  5.  Front End

      - Set up main.handlebars with html template
      - Set up index.handlebars
        - CSS, possible jQuery
        - Form
        - Button to devour

#### DATA FLOW

    - Frontend --> Press Devour --> Controller --> Model --> ORM --> Database

# Done

- Set up folders

- Initialize node

- Install express, handlebars and mysql

- add .gitignore

- Connected to database (burgers_db)
