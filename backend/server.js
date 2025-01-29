import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import slidesRouter from './routes/slidesRoutes.js';
import categoriesRouter from './routes/categoriesRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import cors from 'cors'; 

dotenv.config();  
mongoose.set("strictQuery", false); 
mongoose.connect(process.env.MONGOBD_URI).then(() => {
  console.log('conected to DB');
}).catch(err => {
  console.log(err.message);
})

const app = express(); 
//app.options('*', cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/slides', slidesRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
// test
/* app.get('/api/slides', (req, res) => {
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
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.id); 
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
}); */

const __dirName = path.resolve();
app.use(express.static(path.join(__dirName, '/frontend/build')));
app.get('*', (req, res) => 
res.sendFile(path.join(__dirName, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
