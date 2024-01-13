import { FC } from "react";
import WoolTokenPriceLabel from "../WoolTokenPriceLabel/WoolTokenPriceLabel";
import './HomePage.css';

// Home page for quick overview
const HomePage: FC = () => {

    return (
        <div className='home-page' style={{ borderColor: 'black' }}>
            <h1 className='homepage-header'>Welcome to Wolf Game!</h1>
            <WoolTokenPriceLabel />
            <br />
            <img className='homepage-image' style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'black' }} 
                src="https://wolf.game/images/shepherd.gif" 
                height="250" width="250" alt="Not found" />
            <br />
            <button className='homepage-button' 
                    style={{ marginTop: '2rem', 
                    userSelect: 'none', fontFamily: 'broken console', 
                    width: '200px', height: '40px', backgroundColor: 'rgb(131, 75, 27)', 
                    borderWidth: '4px', borderColor: 'rgb(99, 54, 33)', borderStyle: 'outset' }}>
                        <a href="#/wolves-sheep" style={{ color: 'white'}}>
                            Asset Prices
                        </a>
            </button>
        </div>
    )
}

export default HomePage;