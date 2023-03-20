import './userInfo.scss';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { dots, filterIcon } from '../../assets/icons';
import { Status, FilterModal, UserDetailsModal, Paginator } from '../../components'
import { getUsersFromIndexedDB } from './userDataFetch';
import { Users } from './userType';


interface UserInfoProps {
    onClick: () => void;
}


const UserInfo = ({onClick}: UserInfoProps) => {
    const [userInfoHead] = useState<string[]>(['organisation', 'usernames', 'email', 'phone number', 'date joined', 'status']);
    const [showFilterModal, setShowFilterModal] = useState(userInfoHead.map(() => false));
    const filterRefs = useRef<(HTMLImageElement | null)[]>(new Array(userInfoHead.length).fill(null));
    const [genArray] = useState(Array.from({ length: 100 }, (_, i) => i + 1));
    const [users, setUsers] = useState<Users>(null!);
    const [showUserDetailsModal, setShowUserDetailsModal] = useState(genArray.map(() => false));
    const userDetailsModalRefs = useRef<(HTMLDivElement | null)[]>(new Array(genArray.length).fill(null));

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [entriesPerPage] = useState<number>(10);
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const usersOnPage = users?.slice(indexOfFirstEntry, indexOfLastEntry) as Users;
    

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

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePageChangeWithIndex = (index: number) => { 
        setCurrentPage(index / 10);
    };

    //Fetch cached user data from indexedDB
    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUsersFromIndexedDB();

            setUsers(userData);
        };

        fetchData();
    }, []);

    const formatDate = (dateString: string) => { 
        const date = new Date(dateString);

        const formattedDate = date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })
        return formattedDate;
    };

    return (
        <React.Fragment>
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
                        {usersOnPage && usersOnPage.map((user, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr className='info'>
                                        <td>
                                            <p className='info-content'>{user.orgName}</p>
                                        </td>
                                        <td>
                                            <p className='info-content'>{user.userName}</p>
                                        </td>
                                        <td>
                                            <p className='info-content'>{user.email}</p>
                                        </td>
                                        <td>
                                            <p className='info-content'>{user.profile.phoneNumber}</p>
                                        </td>
                                        <td>
                                            <p className='info-content'>{formatDate(user.createdAt)}</p>
                                        </td>
                                        <td>
                                            <Status />
                                        </td>
                                        <td>
                                            <img className='user-details-btn' src={dots} alt='View user details icon' loading='lazy' ref={(elem) => (userDetailsModalRefs.current[index] = elem)} onClick={() => handleUserDetailsModal(index)}/>
                                        </td>
                                    </tr>
                                    {showUserDetailsModal[index] && userDetailsModalRefs?.current[index] && <UserDetailsModal id={user.id} onClick={onClick} />}
                                </React.Fragment>
                            )
                        })}
                    </tbody>
                </div>
            </section>
            <Paginator itemsPerPage={entriesPerPage} totalItems={genArray.length} onPageChange={handlePageChange} onPageChangeIndex={handlePageChangeWithIndex} />
        </React.Fragment>
    )
};

export default UserInfo;