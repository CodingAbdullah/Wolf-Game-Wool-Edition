import { Request, Response } from 'express';
import axios from 'axios';
import { SIMPLEHASH_URL as API_URL } from '../util/simpleHashAPIURLEndpoint';

const getFarmerFloorPrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Average%20Joe', {
                headers: {
                    'X-API-KEY': process.env.SIMPLE_HASH_API_KEY
                }
             })
    .then(response => {
        res.status(200).json({
            price: Object.keys(response.data).length === 0 ? 0 : response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch farmer floor price data " + err
        });
    });
}

const getFarmerHundoPrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Hundred%20Years', {
                headers: {
                    'X-API-KEY': process.env.SIMPLE_HASH_API_KEY
                }
             })
    .then(response => {
        res.status(200).json({
            price: Object.keys(response.data).length === 0 ? 0 : response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Average Hundo farmer floor price data " + err
        });
    });    
}

const getFarmerTheKidPrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=The%20Kid', {
                headers: {
                    'X-API-KEY': process.env.SIMPLE_HASH_API_KEY
                }
             })
    .then(response => {
        res.status(200).json({
            price: Object.keys(response.data).length === 0 ? 0 : response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Average Hundo farmer floor price data " + err
        });
    });    
}

const getFarmerAverageJoePrice = (req: Request, res: Response) => {
    
    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Average%20Joe', {
                headers: {
                    'X-API-KEY': process.env.SIMPLE_HASH_API_KEY
                }
             })
    .then(response => {
        res.status(200).json({
            price: Object.keys(response.data).length === 0 ? 0 : response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Average Joe farmer floor price data " + err
        });
    });
}

const getFarmerAboveAverageJanePrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Above%20Average%20Jane', {
                headers: {
                    'X-API-KEY': process.env.SIMPLE_HASH_API_KEY
                }
             })
    .then(response => {
        res.status(200).json({
            price: Object.keys(response.data).length === 0 ? 0 : response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Above Average Jane farmer floor price data " + err
        });
    });
}

const getFarmerDieselPrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Diesel', {
                headers: {
                    'X-API-KEY': process.env.SIMPLE_HASH_API_KEY
                }
             })
    .then(response => {
        res.status(200).json({
            price: Object.keys(response.data).length === 0 ? 0 : response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Diesel farmer floor price data " + err
        });
    });
}

const getFarmerBigMamaPrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Big%20Mama', {
                headers: {
                    'X-API-KEY': process.env.SIMPLE_HASH_API_KEY
                }
             })
    .then(response => {
        res.status(200).json({
            price: Object.keys(response.data).length === 0 ? 0 : response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Big Mama farmer floor price data " + err
        });
    });
}

const getFarmerBigDaddyPrice = (req: Request, res: Response) => {
    
    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Big%20Daddy', {
                headers: {
                    'X-API-KEY': process.env.SIMPLE_HASH_API_KEY
                }
             })
    .then(response => {
        res.status(200).json({
            price: Object.keys(response.data).length === 0 ? 0 : response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Big Daddy farmer floor price data " + err
        });
    });
}

// Mapping functions to be used
const farmerAssetPrices = {
    getFarmerFloorPrice,
    getFarmerTheKidPrice,
    getFarmerAboveAverageJanePrice,
    getFarmerAverageJoePrice,
    getFarmerBigDaddyPrice,
    getFarmerBigMamaPrice,
    getFarmerDieselPrice,
    getFarmerHundoPrice
}

export default farmerAssetPrices;