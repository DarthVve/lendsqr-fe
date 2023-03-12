import './home.scss'
import { logo, pablo } from '../../assets/images';
const Home = () => {
    return (
        <>
            <div className='lendsqr-logo'>
                <img src={logo} alt='Lendsqr Logo' />
            </div>
            <div className='landing'>
                <img className='landing-img' src={pablo} alt='Pablo the sign-in avatar' />
                <div className='landing-content'>

                </div>
            </div>
        </>
    )
};

export default Home;