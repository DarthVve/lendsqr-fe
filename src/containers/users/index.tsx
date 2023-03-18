import './users.scss';
import { UserStats, UserInfo } from '../../components';

interface UserProps {
    onClick: () => void;
};

const Users = ({onClick}: UserProps) => {
    return (
        <section className='users'>
            <h3 className='users-header-text'>Users</h3>
            <UserStats />
            <UserInfo onClick={onClick}/>
        </section>
    )
};

export default Users;