import './sidebarSection.scss';
import { home } from '../../assets/icons';

interface SidebarSectionProps { 
    tabs: { title: string, icon: string }[];
    heading: string;
    tabRef: any;
}


const SidebarSection = ({tabs, heading, tabRef}: SidebarSectionProps) => {
    return (
        <div className='sb-section'>
            <p className='sb-section-header'>{heading}</p>
            <div className='sb-section-content'>
                {tabs.map((tab, index) => { 
                    return (<div className='sb-dashboard' key={index}>
                        <img src={tab.icon} alt='Sidebar Tab Icon' loading='lazy' />
                        <p className='sidebar-text' ref={tabRef}>{tab.title}</p>
                    </div>)
                })}
            </div>
        </div>
    )
};

export default SidebarSection;