import { FC } from 'react';
import './Footer.css';

// Footer for acknowledgement
const Footer: FC = () => {
    return (
        <div className='footer'>
            <footer>&#169; { new Date().getFullYear() }. All Rights Reserved. Powered by {" "}
                <a style={{ color: 'black' }} target="_blank" href="https://reactjs.org/">
                    React.js
                </a>
            </footer>
        </div>
    )
}

export default Footer;