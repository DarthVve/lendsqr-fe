import './userStats.scss';
import { userStats } from './userStats';

const UserStats = () => {
    return (
        <div className='user-stats'>
            {userStats.map((stat, index) => { 
                return (
                    <article className='stat' key={index}>
                        <img className='stat-icon' src={stat.icon} alt='User Statistic Icon' />
                        <p className='stat-text'>{stat.title}</p>
                        <p className='stat-number'>{stat.value}</p>
                    </article>
                )
            })}
        </div>
    )
};

export default UserStats;