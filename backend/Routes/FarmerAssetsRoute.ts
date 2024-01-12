import express, { Router } from 'express';
import getFarmerAssetPrice from '../Controller/FarmerAssetsController';

const router: Router = express.Router();

// End point to fetch Farmer asset price
router.get("/wolf-game-farmer-floor-price", getFarmerAssetPrice)

export default router;