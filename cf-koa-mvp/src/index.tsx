import { httpServerHandler } from 'cloudflare:node';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Express.js running on Cloudflare Workers!' });
});

app.listen(3000);
export default httpServerHandler({ port: 3000 });