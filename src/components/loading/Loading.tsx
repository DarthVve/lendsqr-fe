import { RotatingLines } from 'react-loader-spinner'

const CustomLoading = () => {
    return (
        <div style={{ 'display': 'flex', 'flexDirection': "column", 'justifyContent': "center", 'alignItems': 'center' }}><RotatingLines width="35" strokeColor="#6495ED" strokeWidth="3" /></div>
    )
};

export default CustomLoading;