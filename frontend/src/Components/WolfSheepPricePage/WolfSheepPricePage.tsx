import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { wolfGameSheepFloorPrice, wolfGameSheepGen2FloorPrice } from '../../utilFunctions/wolfGameSheepPrice'; 
import { wolfGameWolfFloorPrice, wolfGameWolfA5Price,
         wolfGameWolfA5Gen2Price, wolfGameWolfA6Price, wolfGameWolfA6Gen2Price,
         wolfGameWolfA7Price, wolfGameWolfA7Gen2Price, wolfGameWolfA8Price } from '../../utilFunctions/wolfGameWolfPrice';  
import FloorPriceLabel from '../FloorPriceLabel/FloorPriceLabel';
import './WolfSheepPricePage.css';

// Table representing floor prices for Sheep and Wolves by Alpha Score
// Extreme floor price
// Table detailing prices by trait
const WolfSheepPricePage: FC = () => {
    const navigate = useNavigate(); // Navigation using the built-in hook provided by React-Router

    // Set up queries to run using React Query to used to fetch all Sheep/Wolf floor prices
    const wolfGameSheepPriceQuery = useQuery({
        queryKey: ['sheep floor price'],
        queryFn: wolfGameSheepFloorPrice
    });

    const wolfGameSheepGenTwoPriceQuery = useQuery({
        queryKey: ['sheep floor gen two price'],
        queryFn: wolfGameSheepGen2FloorPrice
    });

    const wolfGameWolfFloorPriceQuery = useQuery({
        queryKey: ['wolf floor price'],
        queryFn: wolfGameWolfFloorPrice
    });

    const wolfGameWolfA5PriceQuery = useQuery({
        queryKey: ['wolf game alpha five floor price'],
        queryFn: wolfGameWolfA5Price
    });

    const wolfGameWolfA5Gen2PriceQuery = useQuery({
        queryKey: ['wolf game alpha five gen two floor price'],
        queryFn: wolfGameWolfA5Gen2Price
    });

    const wolfGameWolfA6PriceQuery = useQuery({
        queryKey: ['wolf game alpha six floor price'],
        queryFn: wolfGameWolfA6Price
    });

    const wolfGameWolfA6Gen2PriceQuery = useQuery({
        queryKey: ['wolf game alpha six gen two floor price'],
        queryFn: wolfGameWolfA6Gen2Price
    });

    const wolfGameWolfA7PriceQuery = useQuery({
        queryKey: ['wolf game alpha seven floor price'],
        queryFn: wolfGameWolfA7Price
    });

    const wolfGameWolfA7Gen2PriceQuery = useQuery({
        queryKey: ['wolf game alpha seven gen two floor price'],
        queryFn: wolfGameWolfA7Gen2Price
    });

    const wolfGameWolfA8PriceQuery = useQuery({
        queryKey: ['wolf game alpha eight floor price'],
        queryFn: wolfGameWolfA8Price
    });

    if (wolfGameSheepPriceQuery.isPending || wolfGameSheepGenTwoPriceQuery.isPending || 
        wolfGameWolfA5PriceQuery.isPending || wolfGameWolfA5Gen2PriceQuery.isPending || 
        wolfGameWolfA6PriceQuery.isPending || wolfGameWolfA6Gen2PriceQuery.isPending ||
        wolfGameWolfA7PriceQuery.isPending || wolfGameWolfA7Gen2PriceQuery.isPending || 
        wolfGameWolfA8PriceQuery.isPending){
            return (
                <div>Loading data..</div>
            )
    }
    else if (wolfGameSheepPriceQuery.isSuccess && wolfGameSheepGenTwoPriceQuery.isSuccess && 
        wolfGameWolfA5PriceQuery.isSuccess && wolfGameWolfA5Gen2PriceQuery.isSuccess && 
        wolfGameWolfA6PriceQuery.isSuccess && wolfGameWolfA6Gen2PriceQuery.isSuccess &&
        wolfGameWolfA7PriceQuery.isSuccess && wolfGameWolfA7Gen2PriceQuery.isSuccess && 
        wolfGameWolfA8PriceQuery.isSuccess) {
                return (
                    <div className='farmer-price-page'>
                        <FloorPriceLabel heading={["Wolf Game Sheep & Wolf Prices", "Sheep/Wolf "]} price={[wolfGameSheepPriceQuery.data.price]} />
                        <table style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }} className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sheep/Wolf Prices</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Sheep (Genesis)
                                        <br />
                                        <img id="p" width="50" height="50" src="https://sheep-and-wolf-images.s3-us-west-2.amazonaws.com/4825.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameSheepPriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameSheepPriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Sheep (Gen 2)
                                        <br />
                                        <img id="p" width="50" height="50" src="https://i.seadn.io/s/raw/files/5bc4aaae3ecd33ef787d9337741db206.png?auto=format&dpr=1&w=1000" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameSheepGenTwoPriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameSheepGenTwoPriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        A5 Wolf
                                        <br />
                                        <img id="p" width="50" height="50" src="https://sheep-and-wolf-images.s3-us-west-2.amazonaws.com/8414.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameWolfA5PriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameWolfA5PriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        A5 Wolf (Gen 2)
                                        <br />
                                        <img id="p" width="50" height="50" src="https://i.seadn.io/s/raw/files/4918bb5099ba63a737b23441f5633cf0.png?auto=format&dpr=1&w=1000" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameWolfA5Gen2PriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameWolfA5Gen2PriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        A6 Wolf
                                        <br />
                                        <img id="p" width="50" height="50" src="https://sheep-and-wolf-images.s3-us-west-2.amazonaws.com/194.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameWolfA6PriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameWolfA6PriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        A6 Wolf (Gen 2)
                                        <br />
                                        <img id="p" width="50" height="50" src="https://i.seadn.io/s/raw/files/ff421a4fe980c70c26341e3d77fd9157.png?auto=format&dpr=1&w=1000" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameWolfA6Gen2PriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameWolfA6Gen2PriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        A7 Wolf
                                        <br />
                                        <img id="p" width="50" height="50" src="https://sheep-and-wolf-images.s3-us-west-2.amazonaws.com/2772.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameWolfA7PriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameWolfA7PriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        A7 Wolf (Gen 2)
                                        <br />
                                        <img id="p" width="50" height="50" src="https://i.seadn.io/s/raw/files/5660ced1f34dbdbdaa2f8a64240f54f6.png?auto=format&dpr=1&w=1000" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameWolfA7Gen2PriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameWolfA7Gen2PriceQuery.data.price)/1000000000000000000 + " ETH" 
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        A8 Wolf
                                        <br />
                                        <img id="p" width="50" height="50" src="https://sheep-and-wolf-images.s3-us-west-2.amazonaws.com/1701.png" />
                                    </th>
                                    <td>
                                        { 
                                            Number(wolfGameWolfA8PriceQuery.data.price) === 0 
                                            ? 'Unlisted' : 
                                            Number(wolfGameWolfA8PriceQuery.data.price)/1000000000000000000 + " ETH" 
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

export default WolfSheepPricePage;