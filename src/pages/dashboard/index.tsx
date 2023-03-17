import './dashboard.scss';
import { Navbar } from '../../components';
import { Sidebar, Users } from '../../containers';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='dashboard-content'>
                <Sidebar />
                <Users />
            </div>
        </div>
    )
};

export default Dashboard;