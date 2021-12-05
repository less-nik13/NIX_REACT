import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from "./pages/404/NotFound";
import Spinner from "./components/Spinner/Spinner";
import PrivateRoute from "./routes/PrivateRoute";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";

const RegisterPage = React.lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'));
const FilmsPage = React.lazy(() => import('./pages/MoviesPage/MoviesPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage/ProfilePage'));
const FavouritesPage = React.lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

function Pages() {

    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route exact path="/" element={
                        <PublicLayout>
                            <FilmsPage/>
                        </PublicLayout>}
                    />

                    <Route exact path="/favorites" element={
                        <PrivateRoute>
                            <PublicLayout>
                                <FavouritesPage />
                            </PublicLayout>
                        </PrivateRoute>
                    }/>

                    <Route exact path="/profile" element={
                        <PrivateRoute>
                            <PublicLayout>
                                <ProfilePage />
                            </PublicLayout>
                        </PrivateRoute>
                    }/>

                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route exact path="/register" element={<RegisterPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Pages;
