import express, { Router } from 'express';
import getLandAssetPrice from '../Controller/LandAssetsController';

const router: Router = express.Router();

// Endpoint to fetch Land asset prices
router.get("/wolf-game-land-floor-price", getLandAssetPrice);

export default router;