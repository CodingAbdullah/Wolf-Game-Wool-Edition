import express, { Express } from 'express';
import cors from 'cors';

// Spin up Node server
const app: Express = express();

// Listening on Port 5000
app.listen(5000, () => console.log("Listening to PORT 5000"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));