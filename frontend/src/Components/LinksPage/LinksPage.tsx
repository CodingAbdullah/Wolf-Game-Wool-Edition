import { FC } from 'react';
import { useNavigate } from 'react-router';
import './Links.css';

// Helpful links that could help
const LinksPage: FC = () => {
    const navigate = useNavigate(); // Navigate hook provided by React Router
    
    return (
        <div className='links-page'>
            <h1 style={{ marginTop: '1.5rem' }}>Helpful Wolf Game Resources</h1>
            <p><i><u>Feel free to checkout any of the following</u></i></p>
            <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }} className='container'>
                <h5 style={{ marginTop: '3rem' }}>In-Game Token Smart Contract Addresses</h5>
                <hr />
                <ul className="neat-list">
                    <li>Wolf Game Wool - <a target="_blank" href="https://etherscan.io/address/0x8355dbe8b0e275abad27eb843f3eaf3fc855e525">
                                            <i>0x8355dbe8b0e275abad27eb843f3eaf3fc855e525</i>
                                         </a>
                    </li>
                    <li>Wolf Game Wool Pouches - <a target="_blank" href="https://etherscan.io/address/0xb76fbbb30e31f2c3bdaa2466cfb1cfe39b220d06">
                                            <i>0xb76fbbb30e31f2c3bdaa2466cfb1cfe39b220d06</i>
                                         </a>
                    </li>
                    <li>Wolf Game (Sheep & Wolves) - <a target="_blank" href="https://opensea.io/collection/wolf-game">
                                                        <i>0x7f36182dee28c45de6072a34d29855bae76dbe2f</i>
                                                     </a>
                    </li>
                    <li>Wolf Game Generation 2 - <a target="_blank" href="https://opensea.io/collection/wolf-game-generation-2">
                                                        <i>0xfb40afd6b7cb87922e4fd828771c62421447e1d5</i>
                                                     </a>
                    </li>
                    <li>Wolf Game Farmers - <a target="_blank" href="https://opensea.io/collection/wolf-game-farmer">
                                                <i>0xbda2481db91fc0f942ed3f53de378ba45ba9d17e</i>
                                            </a>
                    </li>
                    <li>Wolf Game Land - <a target="_blank" href="https://opensea.io/collection/wolf-game-land">
                                            <i>0x2c88aa0956bc9813505d73575f653f69ada60923</i>
                                         </a>
                    </li>
                </ul>
                <h5 style={{ marginTop: '3rem' }}>Community Tools & Resources</h5>
                <hr />
                <ul className="neat-list">
                    <li>Wolf Game - <i><a href="https://wolf.game">Main Site</a></i></li>
                    <li>Wolf Game Tools - <i><a target="_blank" href="https://wolfgame.guru/market">Marketplace Tools</a></i></li>
                    <li>Wolf Community - <i><a target="_blank" href="https://wolfgame.community">Overview of Project</a></i></li>
                    <li>Wolf Farmer's Almanac - <i><a target="_blank" href="https://docs.google.com/document/d/1A-VxZpbqleNECPvB7jWY5CDgNuehI5WE6s2-67Zv908/edit#heading=h.4spwherz51r">
                        Google Docs</a></i>
                    </li>
                    <li>Feral Flips - <i><a target="_blank" href="https://www.feralflips.com/">In-Game Resource Tool</a></i></li>
                </ul>
                <h5 style={{ marginTop: '3rem' }}>Socials</h5>
                <hr />
                <ul className="neat-list">
                    <li><i><a href="https://twitter.com/wolfdotgame">Twitter</a></i></li>
                    <li><i><a target="_blank" href="https://discord.com/invite/wolfgame">Discord</a></i></li>
                </ul>
            </div>
            <button style={{ marginTop: '1rem', fontFamily: 'broken console' }} onClick={ () => navigate("/") }className='btn btn-success'><u>Go Back</u></button>
        </div>
    )
}

export default LinksPage;