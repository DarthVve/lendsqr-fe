import './details.scss';
import { useState } from 'react';
import { avatar, backBtn } from '../../assets/images';
import { star, starEmpty } from '../../assets/icons';
import { Information } from '../../components';

interface UserDetailsProps {
    onClick: () => void;
};

const UserDetails = ({ onClick }: UserDetailsProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [userDetailsNavTabs] = useState(["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"]);
    const handleClick = (): void => {
        onClick();
    };

    return (
        <section className='user-details'>
            <div className='ud-head'>
                <img style={{cursor: 'pointer'}} src={backBtn} alt='Takes you back to view users' loading='lazy' onClick={handleClick}/>
                <div className='ud-header'>
                    <h3 className='ud-header-text'>User Details</h3>
                    <div className='ud-header-btns'>
                        <button className='udh-blacklist-btn'>Blacklist</button>
                        <button className='udh-activate-btn'>Activate</button>
                    </div>
                </div>
            </div>
            <div className='user-header'>
                <div className='uh-1'>
                    <img className='uh-avatar' src={avatar} alt='User Avatar' loading='lazy'/>
                    <div className='uh-1-info'>
                        <p className='uh-1-info-text'>Grace Effiom</p>
                        <p className='uh-1-info-text_1'>LSQF1587y90</p>
                    </div>
                    <hr/>
                    <div className='uh-1-info'>
                        <p className='uh-1-info-text_2'>User Tier</p>
                        <div className='user-stars'>
                            <img src={star} alt='User Star' loading='lazy' />
                            <img src={starEmpty} alt='User Star' loading='lazy' />
                            <img src={starEmpty} alt='User Star' loading='lazy' />
                        </div>
                    </div>
                    <hr/>
                    <div className='uh-1-info'>
                        <p className='uh-1-info-text'>&#x20A6;200,000.00</p>
                        <p className='uh-1-info-text_3'>9912345678/Providus Bank</p>
                    </div>
                </div>
                <div className='user-detail-nav'>
                    {userDetailsNavTabs.map((tab, index) => {
                        return (
                            <p className={activeTab === index ? 'user-nav-text-active' : 'user-nav-text'} key={index} onClick={() => setActiveTab(index)}>{tab}</p>
                        );
                    })}
                </div>
            </div>
            <div className='user-details-body'>
                <Information/>
            </div>
        </section>
    )
};

export default UserDetails;