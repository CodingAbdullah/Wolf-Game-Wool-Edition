import { Request, Response } from 'express';
import axios from 'axios';
import { SIMPLEHASH_URL as API_URL } from '../util/simpleHashAPIURLEndpoint';
import * as dotenv from 'dotenv';

// Set configuration to path where the .env file resides in development environment
dotenv.config({ path: '../.env '});

// Set options for API request
const options = {
    method: 'GET',
    headers: {
        'accept' : 'application/json',
        'content-type': 'application/json',
        'X-API-KEY' : process.env.SIMPLE_HASH_API_KEY
    }
}

const getFarmerFloorPrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Average%20Joe', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
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
             '/floor?trait_type=Type&value=Hundred%20Years', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch farmer floor price data " + err
        });
    });    
}

const getFarmerAverageJoePrice = (req: Request, res: Response) => {
    
    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Average%20Joe', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch farmer floor price data " + err
        });
    });
}

const getFarmerAboveAverageJanePrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Above%20Average%20Jane', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch farmer floor price data " + err
        });
    });
}

const getFarmerDieselPrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Diesel', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch farmer floor price data " + err
        });
    });
}

const getFarmerBigMamaPrice = (req: Request, res: Response) => {

    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Big%20Mama', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch farmer floor price data " + err
        });
    });
}

const getFarmerBigDaddyPrice = (req: Request, res: Response) => {
    
    // Fetch data related to farmer floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_FARMER_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Big%20Daddy', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch farmer floor price data " + err
        });
    });
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