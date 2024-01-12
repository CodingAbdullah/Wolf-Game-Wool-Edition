import express, { Router } from 'express';
import getLandAssetPrices from '../Controller/LandAssetsController';

const router: Router = express.Router();

// Endpoints to fetch Land asset prices
router.get("/wolf-game-land-floor-price", getLandAssetPrices.getLandFloorPrice);
router.get("/wolf-game-land-structure-floor-price", getLandAssetPrices.getLandStructureFloorPrice);
router.get("/wolf-game-land-czero-level-one-price", getLandAssetPrices.getCzeroLevelOnePrice);
router.get("/wolf-game-land-czero-level-two-price", getLandAssetPrices.getCzeroLevelTwoPrice);
router.get("/wolf-game-land-czero-level-three-price", getLandAssetPrices.getCzeroLevelThreePrice);

export default router;