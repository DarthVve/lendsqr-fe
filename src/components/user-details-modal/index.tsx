import './userDetailsModal.scss';
import { useState } from 'react';
import { eye, potrait, blackuser } from '../../assets/icons';
import { useEffect } from 'react';
import { getUserData } from '../user-info/userDataFetch';

interface UserDetailsModalProps {
    onClick: () => void;
    id: string;
};

export let user: any = {};

const UserDetailsModal = ({ id, onClick }: UserDetailsModalProps) => {

    const handleClick = (): void => {
        onClick();
    };

    useEffect(() => { 
        const fetchData = async () => {
            const userData = await getUserData(id);
            user = userData;
        }

        fetchData();
    }, []);

    return (
        <div className='user-details-modal'>
            <div className='udm-menu-option' onClick={handleClick}>
                <img src={eye} alt='View Detail Eyecon' loading='lazy' />
                <p defaultValue={id}>View Details</p>
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