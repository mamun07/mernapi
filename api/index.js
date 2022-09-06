import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// Route file import
import postRoutes from './routers/postRoutes.js';

// Create express app...
const app = express();

// Environment setting...
dotenv.config();
const port = process.env.API_PORT || 5001;
const dbUrl = process.env.API_MONGODB;

// App start and setting...
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Router Resonse...
app.use('/post', postRoutes);

// Database connecting...
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => console.log(`Surver running on port ${port}`))
  )
  .catch((err) => console.log(err.message));
