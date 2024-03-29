import { Request, Response } from 'express';
import axios from 'axios';
import { SIMPLEHASH_URL as API_URL } from '../util/simpleHashAPIURLEndpoint';

const getLandFloorPrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Land floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_LAND_COLLECION_ID + 
             '/floor?trait_type=Structures&value=NO', {
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
            message: "Could not fetch Wolf Game Structure price data " + err
        });
    });
}

const getLandStructureFloorPrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Land Structure floor price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_LAND_COLLECION_ID + 
             '/floor?trait_type=Structures&value=YES', {
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
            message: "Could not fetch Wolf Game Structure floor price data " + err
        });
    });
}

const getCzeroLevelOnePrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Land C0 floor (level 1) price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_LAND_COLLECION_ID + 
             '/floor?trait_type=Peak%20Level&value=1', {
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
            message: "Could not fetch Wolf Game Land C0 (level 1) floor price data " + err
        });
    });
}

const getCzeroLevelTwoPrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Land C0 floor (level 2) price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_LAND_COLLECION_ID + 
             '/floor?trait_type=Peak%20Level&value=2', {
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
            message: "Could not fetch Wolf Game Land C0 (level 2) floor price data " + err
        });
    });
}

const getCzeroLevelThreePrice = (req: Request, res: Response) => {
    // Fetch data related to Wolf Game Land C0 floor (level 3) price
    axios.get(API_URL + '/traits/collection/' + process.env.WOLF_GAME_LAND_COLLECION_ID + 
             '/floor?trait_type=Peak%20Level&value=3', {
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
            message: "Could not fetch Wolf Game Land C0 (level 3) floor price data " + err
        });
    });
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