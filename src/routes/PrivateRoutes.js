import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../pages/loading/Loading';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from 'utils/tokenHelper';
import { authSlice } from 'store/reducers/auth';
import { useState } from 'react';
const PrivateRoute = ({ localStorageToken }) => {
    const dispatch = useDispatch();
    const { token, loading } = useSelector((state) => state.authSlice);
    if (loading) {
        return <Loading />;
    }

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
