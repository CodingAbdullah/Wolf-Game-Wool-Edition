import express, { Router } from 'express';
import gameAssetPrices from '../Controller/GameAssetsController';

const router: Router = express.Router();

// Endpoints to fetch Sheeps and Wolves asset prices
router.get("/wolf-game-sheep-floor-price", gameAssetPrices.getSheepAssetFloorPrice)
router.get("/wolf-game-wolf-floor-price", gameAssetPrices.getWolfAssetFloorPrice)
router.get("/wolf-game-wolf-alpha-five-price", gameAssetPrices.getWolfAlphaFivePrice)
router.get("/wolf-game-wolf-alpha-six-price", gameAssetPrices.getWolfAlphaSixPrice)
router.get("/wolf-game-wolf-alpha-seven-price", gameAssetPrices.getWolfAlphaSevenPrice)
router.get("/wolf-game-wolf-alpha-eight-price", gameAssetPrices.getWolfAlphaEightPrice)

export default router;