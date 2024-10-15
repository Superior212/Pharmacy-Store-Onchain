import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv'; 
import DrugRouter from './Routers/DrugRouter';
import LicenseRouter from './Routers/LicenseRouter';
dotenv.config();


const app = express();
const port = process.env.PORT || 4040;

app.use(cors());
app.use(express.json());
app.use('/api', DrugRouter);
app.use('/api', LicenseRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to PharmX');
});

const mongodb = process.env.MONGO_URI || 'mongodb+srv://agbakwuruoluchi29:jXZlVJjbx3RmEVqe@cluster0.5ofba.mongodb.net/PharmX';
mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});