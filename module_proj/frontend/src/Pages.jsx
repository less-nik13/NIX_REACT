import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import NotFound from "./pages/404/NotFound";
import Spinner from "./components/Spinner/Spinner";

// const FavouritesPage = React.lazy(() => import("./pages/FavouritesPage/FavouritesPage"));
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage/RegisterPage'));
const FilmsPage = React.lazy(() => import('./pages/FilmsPage/FilmsPage'));

// const ProfilePage = React.lazy(() => import('./pages/ProfilePage/ProfilePage'));

function Pages() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route exact path="/" element={
                        <PublicLayout>
                            <FilmsPage/>
                        </PublicLayout>}
                    />

                    {/*<ProtectedRoute exact*/}
                    {/*                path="/favourites"*/}
                    {/*                component={FavouritesPage}*/}
                    {/*                layout={PublicLayout}*/}
                    {/*                isAuthenticated={isAuthenticated}/>*/}

                    {/*<Route exact path="/profile" element={isAuthenticated &&*/}
                    {/*    <PublicLayout>*/}
                    {/*        <ProfilePage />*/}
                    {/*    </PublicLayout>*/}
                    {/*}/>*/}

                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route exact path="/register" element={<RegisterPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Pages;
