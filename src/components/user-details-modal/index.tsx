import './userDetailsModal.scss';
import { eye, potrait, blackuser } from '../../assets/icons';

const UserDetailsModal = () => {
    return (
        <div className='user-details-modal'>
            <div className='udm-menu-option'>
                <img src={eye} alt='View Detail Eyecon' loading='lazy' />
                <p>View Details</p>
            </div>
            <div className='udm-menu-option'>
                <img src={blackuser} alt='View Detail Eyecon' loading='lazy' />
                <p>Blacklist User</p>
            </div>
            <div className='udm-menu-option'>
                <img src={potrait} alt='View Detail Eyecon' loading='lazy' />
                <p>Activate User</p>
            </div>
        </div>
    )
};

export default UserDetailsModal;