import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { wolfGameFarmerAAJPrice, wolfGameFarmerAverageJoePrice, 
            wolfGameFarmerBigDaddyPrice, wolfGameFarmerBigDieselPrice, 
            wolfGameFarmerBigMamaPrice, wolfGameFarmerFloorPrice, 
            wolfGameFarmerHundoPrice, wolfGameFarmerTheKidPrice } from '../../utilFunctions/wolfGameFarmerPrice';
import FloorPriceLabel from '../FloorPriceLabel/FloorPriceLabel';
import './FarmerPricePage.css';

// Table representing floor prices for Farmers, Average Joe, AAJ, Big Mama, Big Daddy, Diesel, Hundos
// Extreme floor price
// Table detailing prices by trait
const FarmerPricePage: FC = () => {
    const navigate = useNavigate(); // Navigation using the built-in hook provided by React-Router

    // Set up queries to run using React Query to used to fetch all farmer floor prices
    const farmerFloorPriceQuery = useQuery({
        queryKey: ['farmer floor price'],
        queryFn: wolfGameFarmerFloorPrice
    });

    const farmerTheKidPriceQuery = useQuery({
        queryKey: ['the kid price'],
        queryFn: wolfGameFarmerTheKidPrice
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
        farmerHundoPriceQuery.isPending || farmerTheKidPriceQuery.isPending){
            return (
                <div>Loading data..</div>
            )
    }
    else if (farmerFloorPriceQuery.isSuccess && 
            farmerAboveAverageJanePriceQuery.isSuccess && 
            farmerAverageJoePriceQuery.isSuccess &&
            farmerBigDaddyPriceQuery.isSuccess &&
            farmerBigMamaPriceQuery.isSuccess &&
            farmerDieselPriceQuery.isSuccess &&
            farmerHundoPriceQuery.isSuccess && farmerTheKidPriceQuery.isSuccess) {
                return (
                    <div className='farmer-price-page'>
                        <FloorPriceLabel heading={["Wolf Game Farmer Prices", "Farmer ", "https://opensea.io/collection/wolf-game-farmer"]} 
                            price={[farmerAverageJoePriceQuery.data.price]} />
                        <table style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }} className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Farmer Assets</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Average Joe
                                        <br />
                                        <img id="p" width="50" height="50" src="https://wg-farmers.s3.us-east-2.amazonaws.com/0x99271479-headshot.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(farmerAverageJoePriceQuery.data.price) === 0 
                                                ? 'Unlisted' : 
                                            Number(farmerAverageJoePriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Diesel
                                        <br />
                                        <img id="p" width="50" height="50" src="https://wg-farmers.s3.us-east-2.amazonaws.com/0x2cc3e178-headshot.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(farmerDieselPriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(farmerDieselPriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        The Kid
                                        <br />
                                        <img id="p" width="50" height="50" src="https://wg-farmers.s3.us-east-2.amazonaws.com/0x5cd13b11-headshot.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(farmerTheKidPriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(farmerTheKidPriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Above Average Jane
                                        <br />
                                        <img id="p" width="50" height="50" src="https://wg-farmers.s3.us-east-2.amazonaws.com/0x8b302c5c-headshot.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(farmerAboveAverageJanePriceQuery.data.price) === 0 
                                                ? 'Unlisted' : 
                                            Number(farmerAboveAverageJanePriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Hundo
                                        <br />
                                        <img width="50" height="50" id="p" src="https://wg-farmers.s3.us-east-2.amazonaws.com/0x122f8948-headshot.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(farmerHundoPriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(farmerHundoPriceQuery.data.price)/1000000000000000000 + " ETH"
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Big Mama
                                        <br />
                                        <img width="50" height="50" id="p" src="https://wg-farmers.s3.us-east-2.amazonaws.com/0x1ad8f254-headshot.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(farmerBigMamaPriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(farmerBigMamaPriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Big Daddy
                                        <br />
                                        <img width="50" height="50" id="p" src="https://wg-farmers.s3.us-east-2.amazonaws.com/0xa7d311f9-headshot.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(farmerBigDaddyPriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(farmerBigDaddyPriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-success" onClick={ () => navigate("/") }><u>Go Back</u></button>
                    </div>
                )    
    }
    else {
        return <div>Error loading data..</div>
    }
}

export default FarmerPricePage;