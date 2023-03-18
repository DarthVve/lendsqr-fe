import './sidebarSection.scss';
import { useState } from 'react';

interface SidebarSectionProps { 
    tabs: { title: string, icon: string }[];
    heading: string;
    onClick: () => void;
};


const SidebarSection = ({ tabs, heading, onClick }: SidebarSectionProps) => {
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const handleClick = (): void => {
        onClick();
        setActiveTab(0);
    };

    return (
        <div className='sb-section'>
            <p className='sb-section-header'>{heading}</p>
            <div className='sb-section-content'>
                {tabs.map((tab, index) => {
                    if (tab.title === 'Users') {
                        return (
                            <div style={{cursor: 'pointer'}} className={activeTab === index ? 'sb-dashboard-active': 'sb-dashboard'} key={index} onClick={handleClick}>
                                <div style={{display: 'flex', gap: '10px', margin: '10px 10px'}}>
                                    <img className='sidebar-icon' src={tab.icon} alt='Sidebar Tab Icon' loading='lazy' />
                                    <p className='sidebar-text'>{tab.title}</p>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div style={{cursor: 'pointer'}} className={activeTab === index ? 'sb-dashboard-active': 'sb-dashboard'} key={index} onClick={() => setActiveTab(index)}>
                                <div style={{display: 'flex', gap: '10px', margin: '10px 10px'}}>
                                    <img className='sidebar-icon' src={tab.icon} alt='Sidebar Tab Icon' loading='lazy' />
                                    <p className='sidebar-text'>{tab.title}</p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
};

export default SidebarSection;