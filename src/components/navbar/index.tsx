import './navbar.scss';
import { logo, avi } from '../../assets/images';
import { arrowDown, bell, searchIcon } from '../../assets/icons';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='nav-logo' src={logo} alt='Lendsqr Logo' loading='lazy' />
            <article className='nav-search'>
                <input className='search' type='text' name='search' placeholder='Search for anything' />
                <a className='search-btn' href='https://google.com' target='_blank' rel='noreferrer'><img src={searchIcon} alt='Magnifying Glass as Search Icon' loading='lazy'/></a>
            </article>
            <article className='nav-user-tools '>
                <a className='docs' href='https://lendsqr.com' target='_blank' rel='noreferrer'>Docs</a>
                <img className='notify-icon' src={bell} alt='Notification Icon' loading='lazy'/>
                <img className='avatar' src={avi} alt='Avatar' loading='lazy' />
                <p className='username'>Adedeji</p>
                <img className='sub-menu' src={arrowDown} alt='Sub Menu Dropdown Arrow' loading='lazy' />
            </article>
        </div>
    )
};

export default Navbar;