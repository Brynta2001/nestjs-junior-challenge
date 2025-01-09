# Core Service

The core service is the main service of the application. It is responsible for managing the deposits in the user's account.

## Technologies

- Node.js
- NestJS
- PostgreSQL
- Docker
- Axios

## Running the application

1. Clone the repository.
2. Run `docker-compose up` to start the database.
3. Run `yarn install` to install the dependencies.
4. Copy the `.env.template` file to `.env` and fill in the environment variables.
5. Run `yarn start` to start the application.
6. The application will be available at `http://localhost:PORT`.

## API

### POST /transactions/cash

This endpoint is used to deposit money into the user's account.

## Author

Bryan Tapia
