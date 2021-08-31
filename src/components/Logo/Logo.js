import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <Tilt className='br2 shadow-2' style={{width: '300px', height: '100px'}}>
            <div style={{ width: '350px', height: '300px', backgroundColor: '#FF5F6D' }}>
                <div className='Tilt-inner pa3'>
                    <img style={{paddingTop: '80px'}} alt='Logo' src={brain}/>
                </div>
            </div>
        </Tilt>
    );
};

ReactDOM.render(<Logo />, document.getElementById('root'));

export default Logo;