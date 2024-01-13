import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { wolfGameLandFloorPrice, wolfGameLandStructureFloorPrice, 
        wolfGameLandPeakLevel1Price, wolfGameLandPeakLevel2Price, 
        wolfGameLandPeakLevel3Price
 } from '../../utilFunctions/wolfGameLandPrice';
 import FloorPriceLabel from '../FloorPriceLabel/FloorPriceLabel';
 import './LandPricePage.css';

// Table representing floor prices for Land(Structure/No Structure), Peak Level (One/Two/Three)
// Table detailing prices by trait
const LandPricePage: FC = () => {
    const navigate = useNavigate(); // Navigation using the built-in hook provided by React-Router

    // Set up queries to run using React Query to used to fetch all Land floor prices
    const wolfGameLandPriceQuery = useQuery({
        queryKey: ['land floor price'],
        queryFn: wolfGameLandFloorPrice
    });

    const wolfGameLandStructurePriceQuery = useQuery({
        queryKey: ['structure floor price'],
        queryFn: wolfGameLandStructureFloorPrice
    });

    const wolfGameLandCzeroLevelOnePriceQuery = useQuery({
        queryKey: ['level one floor price'],
        queryFn: wolfGameLandPeakLevel1Price
    });

    const wolfGameLandCzeroLevelTwoPriceQuery = useQuery({
        queryKey: ['level two floor price'],
        queryFn: wolfGameLandPeakLevel2Price
    });

    const wolfGameLandCzeroLevelThreePriceQuery = useQuery({
        queryKey: ['level three floor price'],
        queryFn: wolfGameLandPeakLevel3Price
    });

    if (wolfGameLandPriceQuery.isPending || wolfGameLandStructurePriceQuery.isPending || 
        wolfGameLandCzeroLevelOnePriceQuery.isPending || wolfGameLandCzeroLevelTwoPriceQuery.isPending || 
        wolfGameLandCzeroLevelThreePriceQuery.isPending){
            return (
                <div>Loading data..</div>
            )
    }
    else if (wolfGameLandPriceQuery.isSuccess && 
            wolfGameLandStructurePriceQuery.isSuccess && 
            wolfGameLandCzeroLevelOnePriceQuery.isSuccess &&
            wolfGameLandCzeroLevelTwoPriceQuery.isSuccess &&
            wolfGameLandCzeroLevelThreePriceQuery.isSuccess) {
                return (
                    <div className='farmer-price-page'>
                        <FloorPriceLabel heading={["Wolf Game Genesis Land Prices", "Land "]} price={[wolfGameLandPriceQuery.data.price]} />
                        <table style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }} className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Genesis Land Prices</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Farm Land (No Structure)
                                        <br />
                                        <img id="p" width="50" height="50" src="https://i.seadn.io/s/raw/files/93dcbc52d39874f4e4d690005ba61e07.png?auto=format&amp;dpr=1&amp;w=1000" />
                                    </th>
                                    <td>{ Number(wolfGameLandPriceQuery.data.price)/1000000000000000000 + " ETH" }</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Farm Land (Structure)
                                        <br />
                                        <img id="p" width="50" height="50" src="https://i.seadn.io/gcs/files/49f74728b827d26fa8b10976f27d6365.png?auto=format&amp;dpr=1&amp;w=1000" />
                                    </th>
                                    <td>{ Number(wolfGameLandStructurePriceQuery.data.price)/1000000000000000000 + " ETH" }</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Peak Level One (Base)
                                        <br />
                                        <img width="50" height="50" id="p" src="https://i.seadn.io/gcs/files/5c567f724606d6d742ce29ed6c5d1168.png?auto=format&amp;dpr=1&amp;w=1000" />
                                    </th>
                                    <td>{ Number(wolfGameLandCzeroLevelOnePriceQuery.data.price)/1000000000000000000 + " ETH"}</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Peak Level Two (Slope)
                                        <br />
                                        <img width="50" height="50" id="p" src="https://i.seadn.io/gcs/files/6c53a68d1c9e069be14954aaeb175631.png?auto=format&amp;dpr=1&amp;w=1000" />
                                    </th>
                                    <td>{ Number(wolfGameLandCzeroLevelTwoPriceQuery.data.price)/1000000000000000000 + " ETH" }</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Peak Level Three (Summit)
                                        <br />
                                        <img width="50" height="50" id="p" src="https://i.seadn.io/gcs/files/70d8bbb3fa7413edd0971afa8c1bbf28.png?auto=format&amp;dpr=1&amp;w=1000" />
                                    </th>
                                    <td>{ Number(wolfGameLandCzeroLevelThreePriceQuery.data.price)/1000000000000000000 + " ETH" }</td>
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

export default LandPricePage;