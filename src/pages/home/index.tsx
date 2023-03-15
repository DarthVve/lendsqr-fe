import './home.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, pablo } from '../../assets/images';

const Home = () => {
    const [type, setType] = useState('password');
    const [show, setShow] = useState('SHOW');

    const showToggle = () => { 
        if (type === 'password') {
            setType('text');
            setShow('HIDE');
        } else {
            setType('password');
            setShow('SHOW');
        }
    };

    return (
        <section className='home'>
            <div className='landing'>
                <div className='lendsqr'>
                    <img className='lendsqr-logo' src={logo} alt='Lendsqr Logo' loading='lazy'/>
                    <img className='landing-img' src={pablo} alt='Pablo the sign-in avatar' loading='lazy'/>
                </div>
                <div className='landing-content'>
                    <h1 className='lc-text1'>Welcome!</h1>
                    <p className='lc-text2'>Enter details to login.</p>
                    <input className='lc-input1' type='email' name='email' placeholder='Email' />
                    <input className='lc-input2' type={type} name='password' placeholder='Password' />
                    <span className='toggle' onClick={showToggle}>{show}</span>
                    <p className='lc-text3'>FORGOT PASSWORD?</p>
                    <Link to='/users'><button className='lc-button'>LOG IN</button></Link>
                </div>
            </div>
        </section>
    )
};

export default Home;