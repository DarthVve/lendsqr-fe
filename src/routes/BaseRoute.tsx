import { Routes, Route } from "react-router-dom";
import React from "react";
// import ProtectedRoute from "./ProtectedRoute";
import { Home, Dashboard } from '../pages';

const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Dashboard />} />
            {/* <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-notice/:id" element={<VerifyNotice />} /> */}

            {/*Protected Routes*/}
            {/* <Route element={<ProtectedRoute />}>
                <Route path="/userprofile/:id" element={<Userprofile />} />
                <Route path='/admin/dashboard' element={<AdminDashboard />} />
            </Route> */}

            {/*Catch Errors*/}
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    )
};

export default BaseRoute;