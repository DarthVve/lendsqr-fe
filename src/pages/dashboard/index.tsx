import './dashboard.scss';
import { Navbar } from '../../components';
import { Sidebar } from '../../containers';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <Sidebar />
        </div>
    )
};

export default Dashboard;