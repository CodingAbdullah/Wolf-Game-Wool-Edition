import { Request, Response } from 'express';

const getSheepAssetFloorPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getWolfAssetFloorPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getWolfAlphaFivePrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getWolfAlphaSixPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getWolfAlphaSevenPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getWolfAlphaEightPrice = (req: Request, res: Response) => {
    // Code to go here..
}

// Mapping functions to be used
const gameAssetPrices = {
    getSheepAssetFloorPrice,
    getWolfAssetFloorPrice,
    getWolfAlphaFivePrice,
    getWolfAlphaSixPrice,
    getWolfAlphaSevenPrice,
    getWolfAlphaEightPrice
}

export default gameAssetPrices;