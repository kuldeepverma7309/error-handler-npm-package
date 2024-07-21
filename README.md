# @kuldeepverma/errorhandler

A custom error handler for Express.js applications.

## Installation

You can install this package using npm:

```bash
npm install @kuldeepverma/errorhandler


Usage
ErrorHandler Class
The ErrorHandler class is used to create custom error objects. It extends the built-in Error class and adds a statusCode property.

import { ErrorHandler } from '@kuldeepverma/errorhandler';

const error = new ErrorHandler('Custom error message', 400);
console.log(error.message); // Custom error message
console.log(error.statusCode); // 400

-------------------------------------------------------------------------------------------------------

Middleware
The errorMiddleware function is an Express error-handling middleware. It logs the error, sets default error properties if they are not set, and sends a JSON response with the error details.

import express from 'express';
import { errorMiddleware, ErrorHandler } from '@kuldeepverma/errorhandler';

const app = express();

app.get('/', (req, res) => {
  throw new ErrorHandler('Not Found', 404);
});

// Error handling middleware
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

-------------------------------------------------------------------------------------------------------

TryCatch Utility
The TryCatch function is a utility to wrap async route handlers and automatically catch errors, passing them to the error-handling middleware.

import express from 'express';
import { TryCatch, ErrorHandler } from '@kuldeepverma/errorhandler';

const app = express();

app.get(
  '/',
  TryCatch(async (req, res, next) => {
    // Some async operation
    const data = await someAsyncFunction();
    res.json(data);
  })
);

// Error handling middleware
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


-------------------------------------------------------------------------------------------------------

Example Project
Here is an example project structure to demonstrate how to use this package:

my-express-app
├── src
│   ├── index.ts
│   └── routes.ts
├── package.json
└── tsconfig.json


------------------------------------------------------------------------------------------------------

License
This project is licensed under the MIT License.


This `README.md` file includes instructions for installing the package, examples of how to use the `ErrorHandler` class, `errorMiddleware` function, and `TryCatch` utility, and provides a sample project structure to demonstrate usage. Adjust the content as needed to fit your specific package details and usage scenarios.
