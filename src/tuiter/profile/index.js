import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const info = useSelector(state => state.usersl)
    console.log(info)

    return(
        <div className="row">
            <div className = "col-1">
                <i className="bi bi-arrow-left fs-5"></i>
            </div>
            <div className="col-5 d-flex fw-bolder">
            <div >
                {info.userName}
            </div>
            </div>
            <div className="mt-2 ms-5">
            <img className="border border-solid border-white wd-width-profile" src="/images/nasa-6.jpg"/>
            </div>
            <div className="row position-relative">
                <div className="col-4 mb-3">
                <img className="rounded-pill w-25 position-absolute top-0" src="/images/reactlogo.jpg"/>
                </div>
                <div className="col-5">

                </div>
                <div className="col-3 position-absolute end-0">

                    <Link to="/tuiter/edit-profile" className="btn btn-light rounded-pill fw-bolder mt-3 border border-1 border-dark">Edit Profile</Link>

                </div>
            </div>
            <div className="wd-margin">
            <div className="mt-5 ps-4 pe-3 wd-margin">
                <div className="fw-bolder fs-5">
                    {info.userName}
                </div>
                <div>
                    {info.handle}
                </div>
                <div className="mt-3">
                    {info.bio}
                </div>
                <div className="mt-3 d-flex">
                    <div className="me-4">
                        <i className="bi bi-geo-alt me-2"></i>
                        {info.location}
                    </div>
                    <div className="me-4">
                        <i className="bi bi-balloon me-2"></i>
                        {info.dateOfBirth}
                    </div>
                    <div>
                        <i className="bi bi-calendar3 me-2"></i>
                        {info.dateJoined}
                    </div>
                </div>
                <div className="mt-3 d-flex">
                    <div className="me-4">
                        {info.followingCount} Followers
                    </div>
                    <div className="me-4">
                        {info.followersCount} Following
                    </div>
                </div>
            </div>

            </div>

        </div>

)
};
export default ProfileComponent;