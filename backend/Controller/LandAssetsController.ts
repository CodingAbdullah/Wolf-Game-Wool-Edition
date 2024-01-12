import { Request, Response } from 'express';

const getLandFloorPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getLandStructureFloorPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getCzeroLevelOnePrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getCzeroLevelTwoPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getCzeroLevelThreePrice = (req: Request, res: Response) => {
    // Code to go here..
}

// Mapping functions to be used
const getLandAssetPrices = {
    getLandFloorPrice,
    getLandStructureFloorPrice,
    getCzeroLevelOnePrice,
    getCzeroLevelTwoPrice,
    getCzeroLevelThreePrice
}

export default getLandAssetPrices;