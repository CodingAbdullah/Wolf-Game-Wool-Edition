import express, { Express } from 'express';
import FarmerAssetRoute from './Routes/FarmerAssetsRoute';
import GameAssetRoute from './Routes/GameAssetsRoute';
import LandAssetRoute from './Routes/LandAssetsRoute';
import cors from 'cors';
import * as dotenv from 'dotenv';

// Set configuration to path where the .env file resides in development environment
dotenv.config();

// Spin up Node server
const app: Express = express();

// Listening on Port 5000
app.listen(5000, () => console.log("Listening to PORT 5000"));

// Add in middleware as well as API routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", FarmerAssetRoute);
app.use("/", GameAssetRoute);
app.use("/", LandAssetRoute);