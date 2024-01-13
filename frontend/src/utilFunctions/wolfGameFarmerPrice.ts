import axios from 'axios';

// Fetch Farmer floor price
export const wolfGameFarmerFloorPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-farmer-floor-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Farmer data");
    }
}

// Fetch Hundo floor price
export const wolfGameFarmerHundoPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-farmer-hundo-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Farmer data");
    }
}

// Fetch Above Average Jane floor price
export const wolfGameFarmerAAJPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-farmer-above-average-jane-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Farmer data");
    }
}

// Fetch Big Mama floor price
export const wolfGameFarmerBigMamaPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-farmer-big-mama-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Farmer data");
    }
}

// Fetch Big Daddy price
export const wolfGameFarmerBigDaddyPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-farmer-big-daddy-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Farmer data");
    }
}

// Fetch Big Diesel floor price
export const wolfGameFarmerBigDieselPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-farmer-diesel-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Farmer data");
    }
}

// Fetch Average Joe floor price
export const wolfGameFarmerAverageJoePrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-farmer-average-joe-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Farmer data");
    }
}