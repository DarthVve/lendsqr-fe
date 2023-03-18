import { active, inactive, pending, blacklisted } from '../../assets/images';

const statusImages = [active, inactive, pending, blacklisted];

const Status = () => {
    const randomIndex = Math.floor(Math.random() * statusImages.length);
    const selectedPicture = statusImages[randomIndex];

    return <img style={{transform: 'translateY(-12px)'}} src={selectedPicture} alt="Randomly selected status as api doesn't support said value" loading='lazy' />;
};

export default Status;