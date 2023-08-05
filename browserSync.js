const dotenv = require('dotenv');
const browserSync = require('browser-sync');

dotenv.config();

const PORT = process.env.PORT_BACK || 3000;
const PORT_PROXY = process.env.PORT_PROXY || 5002;

browserSync({
  proxy: `http://localhost:${PORT}`, // replace with your Express server URL
  files: ['views/**/*.pug'], // replace with your Pug files path
  port: PORT_PROXY, // replace with a free port to run BrowserSync server
});
