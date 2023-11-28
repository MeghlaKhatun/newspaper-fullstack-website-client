import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Profile from "./Profile";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {

    const allUsers= useLoaderData();
    const {user} =useContext(AuthContext);

    const [filterUser, setFilterUser]=useState();

    useEffect(()=>{
        const filtered = allUsers?.filter(allUser=> allUser.email === user?.email)
        setFilterUser(filtered)
    },[allUsers,user?.email])

    return (
        <div>
            <Navbar></Navbar>

            <div>

                {
                    filterUser?.map(user=> <Profile key={user._id} user={user}></Profile>)
                }      
            </div>
        </div>
    );
};

export default MyProfile;