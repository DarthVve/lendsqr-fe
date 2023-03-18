import './dashboard.scss';
import { useState, useRef } from 'react';
import { Navbar } from '../../components';
import { Sidebar, Users, UserDetails } from '../../containers';

const Dashboard = () => {
    const [showUserDetails, setShowUserDetails] = useState(false);

    const handleShowUserDetails = () => {
        setShowUserDetails(true);
    };

    const handleShowUsers = () => {
        setShowUserDetails(false);
    };

    return (
        <div className='dashboard'>
            <Navbar />
            <div className='dashboard-content'>
                <Sidebar onClick={handleShowUsers}/>
                {showUserDetails ? (
                    <UserDetails onClick={handleShowUsers} />
                ) : (
                    <Users onClick={handleShowUserDetails} />
                )}
            </div>
        </div>
    )
};

export default Dashboard;