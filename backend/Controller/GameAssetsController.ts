import { Request, Response } from 'express';

const getSheepAssetPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getWolfAssetPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const gameAssets = {
    getSheepAssetPrice,
    getWolfAssetPrice
}

export default gameAssets;