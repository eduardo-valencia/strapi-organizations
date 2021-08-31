# Strapi Organizations

This project is a simple Strapi app where users can create organizations, add users to them, and post jobs for organizations. Users can also be assigned organization roles.
The app also has Swagger documentation.

## Development Instructions

First, you must add a `.env` file and fill in the following environment variables to run the application properly.

- `DATABASE_URI`: the MongoDB connection string.
- `DATABASE_NAME`: the name of the database to connect to.

### Scripts

Next, run the following commands to install the packages and start the development server:

```
yarn install
yarn develop
```
