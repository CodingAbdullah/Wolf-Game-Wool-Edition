import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { wolfGameFarmerFloorPrice } from '../../utilFunctions/wolfGameFarmerPrice';
import FloorPriceLabel from '../FloorPriceLabel/FloorPriceLabel';

// Table representing floor prices for Average Joe, AAJ, Big Mama, Big Daddy, Diesel, Hundos..
// Extreme floor price
// Table detailing prices by trait
const FarmerPricePage: FC = () => {

    const farmerFloorPriceQuery = useQuery({
        queryKey: ['farmer floor price'],
        queryFn: wolfGameFarmerFloorPrice
    });

    return (
        <div className='farmer-price-page'>
            <FloorPriceLabel heading={["Wolf Game Farmer Prices"]} price={[0]} />
        </div>
    )
}

export default FarmerPricePage;