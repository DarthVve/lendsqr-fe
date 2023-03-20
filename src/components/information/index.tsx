import './information.scss';
import { useState } from 'react';
import { user } from '../user-details-modal';

interface InformationProps { 
    heading: string;
};

const Information = () => {
    const [userData] = useState(user);

    return (
        <>
            <div className='information'>
                <h5 className='info-heading'>Personal Information</h5>
                <div className='info'>
                    <div className='more-info'>
                        <p className='info-head'>FULL NAME</p>
                        <p className='info-text'>{userData.profile.firstName} {userData.profile.lastName}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>PHONE NUMBER</p>
                        <p className='info-text'>{userData.profile.phoneNumber}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>EMAIL ADDRESS</p>
                        <p className='info-text'>{userData.email}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>BVN</p>
                        <p className='info-text'>{userData.profile.bvn}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>GENDER</p>
                        <p className='info-text'>{userData.profile.gender}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>MARITAL STATUS</p>
                        <p className='info-text'>Single</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>CHILDREN</p>
                        <p className='info-text'>None</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>TYPE OF RESIDENCE</p>
                        <p className='info-text'>{userData.profile.address}</p>
                    </div>
                </div>
            </div>
            <hr className='info-border'/>
            <div className='information'>
                <h5 className='info-heading'>Education and Employment</h5>
                <div className='info'>
                    <div className='more-info'>
                        <p className='info-head'>LEVEL OF EDUCATION</p>
                        <p className='info-text'>{userData.education.level}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>EMPLOYMENT STATUS</p>
                        <p className='info-text'>{userData.education.employmentStatus}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>SECTOR OF EMPLOYMENT</p>
                        <p className='info-text'>{userData.education.sector}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>DURATION OF EMPLOYMENT</p>
                        <p className='info-text'>{userData.education.duration}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>OFFICE EMAIL</p>
                        <p className='info-text'>{userData.education.officeEmail}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>MONTHLY INCOME</p>
                        <p className='info-text'>&#x20A6;{userData.education.monthlyIncome.sort()[0]} - &#x20A6;{userData.education.monthlyIncome.sort()[1]}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>LOAN REPAYMENT</p>
                        <p className='info-text'>{userData.education.loanRepayment}</p>
                    </div>
                </div>
            </div>
            <hr className='info-border'/>
            <div className='information'>
                <h5 className='info-heading'>Socials</h5>
                <div className='info'>
                    <div className='more-info'>
                        <p className='info-head'>TWITTER</p>
                        <p className='info-text'>{userData.socials.twitter}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>FACEBOOK</p>
                        <p className='info-text'>{userData.socials.facebook}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>INSTAGRAM</p>
                        <p className='info-text'>{userData.socials.instagram}</p>
                    </div>
                </div>
            </div>
            <hr className='info-border'/>
            <div className='information'>
                <h5 className='info-heading'>Guarantor</h5>
                <div className='info'>
                    <div className='more-info'>
                        <p className='info-head'>FULL NAME</p>
                        <p className='info-text'>{userData.guarantor.firstName} {userData.guarantor.lastName}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>PHONE NUMBER</p>
                        <p className='info-text'>{userData.guarantor.phoneNumber}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>GENDER</p>
                        <p className='info-text'>{userData.guarantor.gender}</p>
                    </div>
                    <div className='more-info'>
                        <p className='info-head'>ADDRESS</p>
                        <p className='info-text'>{userData.guarantor.address}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Information;