import './sidebar.scss';
import { arrowDown1, home, organization } from '../../assets/icons';
import { SidebarSection } from '../../components';
import { customers, businesses, settings } from './sidebarData';

interface SidebarProps { 
    onClick: () => void;
};


const Sidebar = ({onClick}: SidebarProps) => {
    return (
        <section className='sidebar'>
            <div className='organisation-select'>
                <img src={organization} alt='Switch Organisation Tab Icon' loading='lazy' />
                <p className='os-text'>Switch Organisation</p>
                <img src={arrowDown1} alt='Switch Organisation Dropdown Icon' loading='lazy' />
            </div>
            <div className='sb-dashboard'>
                <img src={home} alt='Dashboard Tab Icon' loading='lazy' />
                <p className='sidebar-text'>Dashboard</p>
            </div>
            <>
                <SidebarSection tabs={customers} heading='CUSTOMERS' onClick={onClick} />
                <SidebarSection tabs={businesses} heading='BUSINESSES' onClick={onClick} />
                <SidebarSection tabs={settings} heading='SETTINGS' onClick={onClick} />
            </>
        </section>
    )
};

export default Sidebar;