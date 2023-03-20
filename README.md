# Lendsqr FE Test

This is frontend application which employs React, Typescript, SCSS using Vite. It serves as an admin dashboard for a fintech company. It utilizes an  API that facilitates getting  
dummy customer data to populate the dashboard.

## API Documentation

The user routes facilitates, creating a user account, logging in and logging out a user,
generating a payment link for users to fund their account, and user wallet debit.

[Get All Users](https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users)
[Get A User](https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id)

## Environment Variables

To run this project, you will need to add a an .env file if not already present and add the following environment variable:

`VITE_APP_BASE_URL` this is the base URL which the app uses to make api calls.

## Run Locally

To run this project you must have docker desktop installed and running  on your local machine.
You will also need to create an account with flutterwave or paystack, depending on what you want to work with,
in other to get your api keys.

Clone the project

```bash
  git clone https://github.com/DarthVve/lendsqr-fe-test.git
```

Go to the project directory

```bash
  cd lendsqr-fe-test
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

## Running Tests

Testing was carried out using Cypress/Jest To run tests, run the following command

```bash
  yarn test
```

## Deployment

This project was deployed on Vercel. Here is the link to the base url.

<https://majoroh-oshevire-lendsqr-fe-test.vercel.app/>

## Authors

- [Vve](https://www.linkedin.com/in/viremaj)
