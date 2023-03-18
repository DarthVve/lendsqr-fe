import { Routes, Route } from "react-router-dom";
import { Home, Dashboard } from '../pages';

const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Dashboard />} />

            {/*Catch Errors*/}
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    )
};

export default BaseRoute;