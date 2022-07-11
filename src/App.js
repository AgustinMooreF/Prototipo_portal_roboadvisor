// project import
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'components/Loadable';
import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
import { useState, useEffect } from 'react';
import { getToken } from 'utils/tokenHelper';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //
import PrivateRoute from 'routes/PrivateRoutes';
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const App = () => {
    const [localStorageToken, setlocalStorageToken] = useState(null);
    useEffect(() => {
        setlocalStorageToken(getToken());
    }, []);
    console.log(localStorageToken);
    return (
        <ThemeCustomization>
            <ScrollTop>
                <Routes>
                    <Route path="/" element={<MinimalLayout />}>
                        <Route path="/login" element={<AuthLogin />} />
                    </Route>
                    {/* <Routes auth={auth} /> */}
                    <Route path="/" element={<PrivateRoute localStorageToken={localStorageToken} />}>
                        <Route path="/" element={<MainLayout />}>
                            <Route path="/" element={<DashboardDefault />} />
                            <Route path="dashboard" element={<DashboardDefault />} />
                            <Route path="/sample-page" element={<SamplePage />} />
                            <Route path="/shadow" element={<Shadow />} />
                            <Route path="/typography" element={<Typography />} />
                            <Route path="/icons/ant" element={<AntIcons />} />
                        </Route>
                    </Route>
                </Routes>
            </ScrollTop>
        </ThemeCustomization>
    );
};

export default App;
