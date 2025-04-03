<p align="center">
  <a href="https://commercetools.com/">
    <img alt="commercetools logo" src="https://unpkg.com/@commercetools-frontend/assets/logos/commercetools_primary-logo_horizontal_RGB.png">
  </a>
</p>

# ts-sdk

Included is a pre-configured TypeScript/JavaScript SDK project with a few base functions that the user can run. It compiles TypeScript files from the root directory into JavaScript files in the `dist` directory. It includes a script to compile and run the project.

## Dependencies

- [Node.js](https://nodejs.org/): Required to run JavaScript on the server.
- [npm](https://www.npmjs.com/): Node package manager, used to install:
  - `dotenv`: Loads environment variables from a `.env` file into `process.env`.
  - `typescript`: Adds types to JavaScript, making the code more robust and understandable.
  - `@types/node`: Type definitions for Node.js, required for TypeScript to understand Node.js types.

## Prompts

I have a functioning commercetools TS SDK repository, make note of my package.json to see what dependcies I'm currently using. 
Use the `lib` directory as a reference on how to work with the SDK and create functions. 

"In `client.ts`, create a function that will..."

## Usage

Update `client.ts` with your function and logic.

To compile TypeScript to JavaScript, use the following command:
`tsc`

To run the application:
`npm start`

## License

[MIT License](LICENSE)