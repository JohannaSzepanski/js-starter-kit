//web server
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log(`Error: ${error}!`); // eslint-disable-line no-console
  } else {
    console.log(`Example app listening on port ${port}!`); // eslint-disable-line no-console
  }
});
