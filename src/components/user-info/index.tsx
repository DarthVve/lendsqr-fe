import './userInfo.scss';
import React from 'react';
import { useState, useRef } from 'react';
import { dots, filterIcon } from '../../assets/icons';
import FilterModal from '../filter-modal';
import UserDetailsModal from '../user-details-modal';



const UserInfo = () => {
    const [userInfoHead] = useState(['organisation', 'usernames', 'email', 'phone number', 'date joined', 'status']);
    const [showFilterModal, setShowFilterModal] = useState(userInfoHead.map(() => false));
    const filterRefs = useRef<(HTMLImageElement | null)[]>(new Array(userInfoHead.length).fill(null));
    const [genArray] = useState(Array.from({ length: 10 }, (_, i) => i + 1));
    const [showUserDetailsModal, setShowUserDetailsModal] = useState(genArray.map(() => false));
    const userDetailsModalRefs = useRef<(HTMLDivElement | null)[]>(new Array(genArray.length).fill(null));

    const handleShowFilterModal = (index: number) => {
        const newShowFilterModal = [...showFilterModal];
        newShowFilterModal[index] = !newShowFilterModal[index];
        setShowFilterModal(newShowFilterModal);
    };

    const handleUserDetailsModal = (index: number) => {
        const newShowUserDetailsModal = [...showUserDetailsModal];
        newShowUserDetailsModal[index] = !newShowUserDetailsModal[index];
        setShowUserDetailsModal(newShowUserDetailsModal);
    };

    return (
        <section className='user-info'>
            <div className='ui-table'>
                <thead className='ui-nav'>
                    <tr>
                        {userInfoHead.map((headtext, index) => {
                            return (
                                <th key={index}>
                                    <div className='user-info-header'>
                                        <p className='user-info-header-text'>{headtext}</p>
                                        <img className='filter-icon' src={filterIcon} alt='Filter Icon' loading='lazy' ref={(el) => (filterRefs.current[index] = el)} onClick={() => handleShowFilterModal(index)}/>
                                        {showFilterModal[index] && filterRefs?.current[index] &&  <FilterModal/>}
                                    </div>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {genArray.map((num, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr className='info'>
                                    <td>
                                        <p className='info-content'>testing</p>
                                    </td>
                                    <td>
                                        <p className='info-content'>testing</p>
                                    </td>
                                    <td>
                                        <p className='info-content'>testing</p>
                                    </td>
                                    <td>
                                        <p className='info-content'>testing</p>
                                    </td>
                                    <td>
                                        <p className='info-content'>testing</p>
                                    </td>
                                    <td>
                                        <p className='info-content'>testing</p>
                                    </td>
                                    <td>
                                        <img className='user-details-btn' src={dots} alt='View user details icon' loading='lazy' ref={(elem) => (userDetailsModalRefs.current[index] = elem)} onClick={() => handleUserDetailsModal(index)}/>
                                    </td>
                                </tr>
                                {showUserDetailsModal[index] && userDetailsModalRefs?.current[index] && <UserDetailsModal />}
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </div>
        </section>
    )
};

export default UserInfo;