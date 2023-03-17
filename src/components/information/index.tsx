import './information.scss';
import { dots } from '../../assets/icons';

const Information = () => {
    return (
        <div className='information'>
            <div className='info'>
                <p className='info-content'>testing</p>
            </div>
            <div className='info-1'>
                <p className='info-content'>testing</p>
            </div>
            <div className='info-2'>
                <p className='info-content'>testing</p>
            </div>
            <div className='info-3'>
                <p className='info-content'>testing</p>
            </div>
            <div className='info-4'>
                <p className='info-content'>testing</p>
            </div>
            <div className='info-5'>
                <p className='info-content'>testing</p>
            </div>
            <div className='more-info'>
                <img src={dots} alt='User details sub-menu icon' loading='lazy'/>
            </div>


        </div>
    )
};

export default Information;