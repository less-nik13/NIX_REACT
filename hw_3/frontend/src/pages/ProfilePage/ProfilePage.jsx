import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, IoIosLogOut } from "react-icons/all";

import { getUser, logout } from "../../redux/actions/auth";
import Button from "../../components/Button/Button";
import UserProfileLoader from "../../components/UserProfileLoader/UserProfileLoader";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth);

    useEffect(() => {
        if(!currentUser) {
            dispatch(getUser());
        }
    }, [ dispatch, currentUser ]);

    const handleClick = () => {
        dispatch(logout());
    };

    return (
        <>
            {currentUser ? <div className="profile">
                <div className="profile__wrapper">
                    <FaUserCircle size={110}/>
                    <div className="profile__info">
                        <p className="profile__info-text"><span>User id:</span> {currentUser.id}</p>
                        <p className="profile__info-text"><span>User name:</span> {currentUser.name}</p>
                        <p className="profile__info-text"><span>User email:</span> {currentUser.email}</p>
                    </div>
                </div>
                <Button className="logout-btn" type="button" handleSubmit={handleClick}>
                    <span>Logout</span>
                    <IoIosLogOut size={25}/>
                </Button>
            </div> : <UserProfileLoader/>}
        </>
    );
};

export default ProfilePage;