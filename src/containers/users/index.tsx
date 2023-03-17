import './users.scss';
import { UserStats, UserInfo } from '../../components';

const Users = () => {
    return (
        <section className='users'>
            <p className='users-header-text'>Users</p>
            <UserStats />
            <UserInfo />
        </section>
    )
};

export default Users;