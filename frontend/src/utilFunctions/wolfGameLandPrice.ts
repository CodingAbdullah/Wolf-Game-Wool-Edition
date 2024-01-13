import axios from 'axios';

// Fetch Wolf Game Land floor price
export const wolfGameLandFloorPrice = async () => {
    const response = await axios.get('https://localhost:5000/wolf-game-land-floor-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Land data");
    }
}

// Fetch Wolf Game Land Structure floor prices
export const wolfGameLandStructureFloorPrice = async () => {
    const response = await axios.get('https://localhost:5000/wolf-game-land-structure-floor-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Land Structure data");
    }
}

// Fetch Wolf Game Land Peak Level 1 floor price
export const wolfGameLandPeakLevel1Price = async () => {
    const response = await axios.get('https://localhost:5000/wolf-game-land-czero-level-one-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Land Level 1 data");
    }
}

// Fetch Wolf Game Land Peak Level 2 floor price
export const wolfGameLandPeakLevel2Price = async () => {
    const response = await axios.get('https://localhost:5000/wolf-game-land-czero-level-two-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Land Level 2 data");
    }
}

// Fetch Wolf Game Land Peak Level 3 floor price
export const wolfGameLandPeakLevel3Price = async () => {
    const response = await axios.get('https://localhost:5000/wolf-game-land-czero-level-three-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Land Level 3 data");
    }
}