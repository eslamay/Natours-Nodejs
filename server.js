/* eslint-disable no-console */
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

// eslint-disable-next-line import/no-extraneous-dependencies, import/order
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION!🔥 Shutting down ...');
  console.log(err.name, err.message);
  // eslint-disable-next-line no-undef
  server.close(() => {
    process.exit(1);
  });
});
