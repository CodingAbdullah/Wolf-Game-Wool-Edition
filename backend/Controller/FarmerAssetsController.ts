import { Request, Response } from 'express';

const getFarmerFloorPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getFarmerHundoPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getFarmerAverageJoePrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getFarmerAboveAverageJanePrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getFarmerDieselPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getFarmerBigMamaPrice = (req: Request, res: Response) => {
    // Code to go here..
}

const getFarmerBigDaddyPrice = (req: Request, res: Response) => {
    // Code to go here..
}

// Mapping functions to be used
const farmerAssetPrices = {
    getFarmerFloorPrice,
    getFarmerAboveAverageJanePrice,
    getFarmerAverageJoePrice,
    getFarmerBigDaddyPrice,
    getFarmerBigMamaPrice,
    getFarmerDieselPrice,
    getFarmerHundoPrice
}

export default farmerAssetPrices;