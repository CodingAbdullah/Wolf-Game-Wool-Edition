import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { wolfGameFarmerAAJPrice, wolfGameFarmerAverageJoePrice, 
            wolfGameFarmerBigDaddyPrice, wolfGameFarmerBigDieselPrice, 
            wolfGameFarmerBigMamaPrice, wolfGameFarmerFloorPrice, 
            wolfGameFarmerHundoPrice } from '../../utilFunctions/wolfGameFarmerPrice';
import FloorPriceLabel from '../FloorPriceLabel/FloorPriceLabel';

// Table representing floor prices for Farmers, Average Joe, AAJ, Big Mama, Big Daddy, Diesel, Hundos
// Extreme floor price
// Table detailing prices by trait
const FarmerPricePage: FC = () => {

    // Set up queries to run using React Query to used to fetch all farmer floor prices
    const farmerFloorPriceQuery = useQuery({
        queryKey: ['farmer floor price'],
        queryFn: wolfGameFarmerFloorPrice
    });

    const farmerAverageJoePriceQuery = useQuery({
        queryKey: ['average joe price'],
        queryFn: wolfGameFarmerAverageJoePrice
    });

    const farmerAboveAverageJanePriceQuery = useQuery({
        queryKey: ['above average jane price'],
        queryFn: wolfGameFarmerAAJPrice
    });

    const farmerDieselPriceQuery = useQuery({
        queryKey: ['diesel price'],
        queryFn: wolfGameFarmerBigDieselPrice
    });

    const farmerBigMamaPriceQuery = useQuery({
        queryKey: ['big mama price'],
        queryFn: wolfGameFarmerBigMamaPrice
    });

    const farmerBigDaddyPriceQuery = useQuery({
        queryKey: ['big daddy price'],
        queryFn: wolfGameFarmerBigDaddyPrice
    });

    const farmerHundoPriceQuery = useQuery({
        queryKey: ['hundo price'],
        queryFn: wolfGameFarmerHundoPrice
    });

    if (farmerFloorPriceQuery.isPending || farmerAboveAverageJanePriceQuery.isPending || 
        farmerAverageJoePriceQuery.isPending || farmerBigDaddyPriceQuery.isPending || 
        farmerBigMamaPriceQuery.isPending || farmerDieselPriceQuery.isPending || 
        farmerHundoPriceQuery.isPending){
            <div>Loading data..</div>
    }
    else if (farmerFloorPriceQuery.isSuccess || 
            farmerAboveAverageJanePriceQuery.isSuccess || 
            farmerAverageJoePriceQuery.isSuccess || 
            farmerBigDaddyPriceQuery.isSuccess || 
            farmerBigMamaPriceQuery.isSuccess || 
            farmerDieselPriceQuery.isSuccess || 
            farmerHundoPriceQuery.isSuccess) {
                return (
                    <div className='farmer-price-page'>
                        <FloorPriceLabel heading={["Wolf Game Farmer Prices"]} price={[0]} />
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Farmer Assets</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Average Joe</th>
                                    <td>{ farmerAverageJoePriceQuery.data.price }</td>
                                </tr>
                                <tr>
                                    <th scope="row">Above Average Jane</th>
                                    <td>{ farmerAboveAverageJanePriceQuery.data.price }</td>
                                </tr>
                                <tr>
                                    <th scope="row">Diesel</th>
                                    <td>{ farmerDieselPriceQuery.data.price }</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hundo</th>
                                    <td>{ farmerHundoPriceQuery.data.price }</td>
                                </tr>
                                <tr>
                                    <th scope="row">Big Mama</th>
                                    <td>{ farmerBigMamaPriceQuery.data.price }</td>
                                </tr>
                                <tr>
                                    <th scope="row">Big Daddy</th>
                                    <td>{ farmerBigDaddyPriceQuery.data.price }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )    
    }
    else {
        return <div>Error loading data..</div>
    }
}

export default FarmerPricePage;