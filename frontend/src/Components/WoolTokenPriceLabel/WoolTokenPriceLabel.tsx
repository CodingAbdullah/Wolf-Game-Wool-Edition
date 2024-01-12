import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import wolfGameWoolPrice from '../../utilFunctions/wolfGameWoolPrice';
import './WoolTokenPriceLabel.css';

// Small label to display Wolf Game Wool Token Price
const WoolTokenPriceLabel: FC = () => {
    
    // Efficiently fetch Wolf Game Wool Token price
    const wolfGameWoolPriceQuery = useQuery({
        queryKey: ['wolf game wool'],
        queryFn: wolfGameWoolPrice
    });

    // Conditionally render Wolf Game Wool price
    if (wolfGameWoolPriceQuery.isLoading) {
        return <div>Loading...</div>
    }
    else if (wolfGameWoolPriceQuery.isSuccess) {
        return (
            <>
                <label>Wolf Game Wool Price: { "$" + wolfGameWoolPriceQuery.data.usd.toFixed(6) + " USD"}</label>
                <br />
                <label>24 Hr % Change:
                    {
                        wolfGameWoolPriceQuery.data.usd_24h_change >= 0 ? 
                            <label style={{ color: 'green', fontWeight: 'bold' }}>
                                { " +" + wolfGameWoolPriceQuery.data.usd_24h_change.toFixed(2) + "%" }
                            </label>
                        :
                            <label style={{ color: 'red', fontWeight: 'bold' }}>
                                { " " + wolfGameWoolPriceQuery.data.usd_24h_change.toFixed(2) + "%" }
                            </label>
                    }
                </label>
                <br />
                <label>24 Hr Volume: { "$" + wolfGameWoolPriceQuery.data.usd_24h_vol.toFixed(2) + " USD" }</label>

            </>
        )
    }
    else {
        return <h1>Could not fetch data</h1>
    }
}

export default WoolTokenPriceLabel;