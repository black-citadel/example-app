const express = require('express');
const logger = require('./utils/logger');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  logger.info('hello world');
  res.send('Hello World!');
});

app.post('/register', (req, res) => {
  res.status(201).json({
    message: 'User created successfully!',
    user: {
      name: 'John Doe',
      email: 'john@doe.com',
    },
  });
});

app.post('/login', (req, res) => {
  res.status(200).json({
    message: 'User created successfully!',
    user: {
      name: 'John Doe',
      email: 'john@doe.com',
    },
  });
});

app.listen(port, () => {
  logger.info(`Service listening on port ${port}`);
});
