import express, { Router } from 'express';
import farmerAssetPrices from '../Controller/FarmerAssetsController';

const router: Router = express.Router();

// Endpoints to fetch Farmer asset prices
router.get("/wolf-game-farmer-floor-price", farmerAssetPrices.getFarmerFloorPrice)
router.get("/wolf-game-farmer-average-joe-price", farmerAssetPrices.getFarmerAverageJoePrice)
router.get("/wolf-game-farmer-the-kid-price", farmerAssetPrices.getFarmerTheKidPrice)
router.get("/wolf-game-farmer-above-average-jane-price", farmerAssetPrices.getFarmerAboveAverageJanePrice)
router.get("/wolf-game-farmer-hundo-price", farmerAssetPrices.getFarmerHundoPrice)
router.get("/wolf-game-farmer-diesel-price", farmerAssetPrices.getFarmerDieselPrice)
router.get("/wolf-game-farmer-big-daddy-price", farmerAssetPrices.getFarmerBigDaddyPrice)
router.get("/wolf-game-farmer-big-mama-price", farmerAssetPrices.getFarmerBigMamaPrice)

export default router;