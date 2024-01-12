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

const getSheepAssetFloorPrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Sheep floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_SHEEP_WOLF_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Sheep', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Sheep floor price data " + err
        });
    });
}

const getWolfAssetFloorPrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Wolf floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_SHEEP_WOLF_COLLECTION_ID + 
             '/floor?trait_type=Type&value=Wolf', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Wolf floor price data " + err
        });
    });
}

const getWolfAlphaFivePrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Alpha Five floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_SHEEP_WOLF_COLLECTION_ID + 
             '/floor?trait_type=Alpha%20Score&value=5', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Alpha 5 Wolf floor price data " + err
        });
    });
}

const getWolfAlphaSixPrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Alpha Six floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_SHEEP_WOLF_COLLECTION_ID + 
             '/floor?trait_type=Alpha%20Score&value=6', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Alpha 6 Wolf floor price data " + err
        });
    });
}

const getWolfAlphaSevenPrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Alpha Seven floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_SHEEP_WOLF_COLLECTION_ID + 
             '/floor?trait_type=Alpha%20Score&value=7', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Alpha 7 Wolf floor price data " + err
        });
    });
}

const getWolfAlphaEightPrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Alpha Seven floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_SHEEP_WOLF_COLLECTION_ID + 
             '/floor?trait_type=Alpha%20Score&value=8', options)
    .then(response => {
        res.status(200).json({
            price: response.data.floor_price.value
        });
    })
    .catch(err => {
        res.status(400).json({
            message: "Could not fetch Alpha 8 Wolf floor price data " + err
        });
    });
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