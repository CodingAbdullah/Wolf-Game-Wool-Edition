import axios from 'axios';

// Fetch Wolf Game Sheep floor price
export const wolfGameSheepFloorPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-sheep-floor-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Sheep data");
    }
}

// Fetch Wolf Game Sheep Generation 2 floor price
export const wolfGameSheepGen2FloorPrice = async () => {
    const response = await axios.get('http://localhost:5000/wolf-game-sheep-floor-gen-two-price');

    if (response.status === 200){
        return response.data;
    }
    else {
        throw new Error("Could not fetch Wolf Game Sheep Generation 2 data");
    }
}