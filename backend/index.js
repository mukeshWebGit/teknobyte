import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
//import productRouter from './routes/productRoutes.js';

dotenv.config();
mongoose.connect(process.env.MONGOBD_URI).then(() => {
  console.log('conected to DB');
}).catch(err => {
  console.log(err.message);
})

const app = express();
app.use('/api/seed', seedRouter);
//app.use('/api/products', productRouter);
// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/slides', (req, res) => {
  res.send(data.slides);
});
app.get('/api/categories', (req, res) => {
  res.send(data.categories);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug); 
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

 

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
