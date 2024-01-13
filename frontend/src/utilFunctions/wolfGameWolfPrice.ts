import axios from 'axios';

// Endpoints to fetch Wolves/Wolves Generation 0/1/2 asset prices
export const wolfGameWolfFloorPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-wolf-floor-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Wolf floor data");
    }
}

// Fetch Alpha 5 Wolf floor price
export const wolfGameWolfA5Price = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-wolf-alpha-five-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Wolf Alpha 5 data");
    }
}

// Fetch Alpha 5 Generation 2 Wolf floor price
export const wolfGameWolfA5Gen2Price = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-wolf-alpha-five-gen-two-price');

    console.log(response);
    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Wolf Alpha 5 Gen 2 data");
    }
}

// Fetch Alpha 6 Wolf floor price
export const wolfGameWolfA6Price = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-wolf-alpha-six-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Wolf Alpha 6 data");
    }
}

// Fetch Alpha 6 Generation 2 Wolf floor price
export const wolfGameWolfA6Gen2Price = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-wolf-alpha-six-gen-two-price');

    console.log(response);
    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Wolf Alpha 6 Gen 2 data");
    }
}

// Fetch Alpha 7 Wolf floor price
export const wolfGameWolfA7Price = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-wolf-alpha-seven-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Wolf Alpha 7 data");
    }
}

// Fetch Alpha 7 Generation 2 Wolf floor price
export const wolfGameWolfA7Gen2Price = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-wolf-alpha-seven-gen-two-price');

    console.log(response);
    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Wolf Alpha 7 Gen 2 data");
    }
}

// Fetch Alpha 8 Wolf floor price
export const wolfGameWolfA8Price = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-wolf-alpha-eight-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Wolf Alpha 8 data");
    }
}