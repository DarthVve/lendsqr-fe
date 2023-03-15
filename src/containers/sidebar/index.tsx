import './sidebar.scss';
import { arrowDown1, home, organization } from '../../assets/icons';
import { SidebarSection } from '../../components';
import { customers, businesses, settings } from './sidebarData';

interface SidebarProps { 
    tabRef: any;
}

const Sidebar = ({tabRef}: SidebarProps) => {
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
                <SidebarSection tabs={customers} heading='CUSTOMERS' tabRef={tabRef} />
                <SidebarSection tabs={businesses} heading='BUSINESSES' tabRef={tabRef} />
                <SidebarSection tabs={settings} heading='SETTINGS' tabRef={tabRef} />
            </>
        </section>
    )
};

export default Sidebar;