import express, { Router } from 'express';
import gameAssets from '../Controller/GameAssetsController';

const router: Router = express.Router();

// Endpoint to fetch Sheeps and Wolves asset price
router.get("/wolf-game-sheep-floor-price", gameAssets.getSheepAssetPrice)
router.get("/wolf-game-wolf-floor-price", gameAssets.getWolfAssetPrice)

export default router;