import axios from 'axios';

const REQUEST_URL = 'https://api.coingecko.com/api/v3/simple/token_price/' + 
                    'ethereum?contract_addresses=0x8355dbe8b0e275abad27eb843f3eaf3fc855e525' + 
                    '&vs_currencies=usd&include_market_cap=true' + 
                    '&include_24hr_vol=true&include_24hr_change=true';

// Query function for fetching token price                   
const wolfGameWoolPrice = async () => {

    const response = await axios.get(REQUEST_URL);

    // Check status of response
    if (response.status !== 200) {
        throw new Error("Could not fetch Wolf Game WOOL token price!");
    }
    
    // If error check passes, return data
    return response.data["0x8355dbe8b0e275abad27eb843f3eaf3fc855e525"];
}

export default wolfGameWoolPrice;