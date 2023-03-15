import './dashboard.scss';
import { Navbar } from '../../components';
import { Sidebar } from '../../containers';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
        </div>
    )
};

export default Dashboard;