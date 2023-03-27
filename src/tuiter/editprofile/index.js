import React, {useState} from "react";
import "./index.css";
import PostListSum from "../PostList";
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {changeInfo} from "../tuits/uinforeducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
const EditProfileComponent = () => {
    const info = useSelector(state => state.usersl)
    const disptach = useDispatch()
    const [username, setUsername] = useState(info.userName);
    const [bio, setBio] = useState(info.bio);
    const [location, setLocation] = useState(info.location);
    const [website, setWebsite] = useState(info.website);
    const [dateOfBirth, setDateOfBirth] = useState(info.dateOfBirth);

    const SaveProfile = () => {
        disptach(changeInfo({username,bio,location,website,dateOfBirth}))

    }

    return (

        <div className="row">
            <div className="d-flex justify-content-around align-content-center">
                <div className="d-flex">
                    <Link to="/tuiter/profile"><FontAwesomeIcon icon={faXmark} className="me-2"/></Link>
                </div>
                <div className="fw-bolder">
                    <div>
                        Edit Profile
                    </div>
                </div>
                <Link
                    className="btn btn-light rounded-pill fw-bolder border border-1 border-dark"
                    to="/tuiter/profile"
                    onClick={SaveProfile}
                >
                    Save
                </Link>
            </div>

        <div className="mt-4 ms-5 position-relative">
            <img className="border border-solid border-white w-75" src="/images/nasa-6.jpg"/>
            <div
                className="position-absolute top-50 start-50">
                <div className="me-5 position-absolute   wd-margin1">
                    <i className="bi bi-camera fs-4"></i>
                </div>
                <div className="me-5 position-absolute  wd-margin2">
                    <i className="bi bi-x-lg fs-4"></i>
                </div>
            </div>
        </div>
            <div className="row position-relative">
                                <div className="col-4 mb-3">
                                <img className="rounded-pill w-25 position-absolute wd-margin3" src="/images/reactlogo.jpg"/>
                                </div>
                <div className="mt-5 ps-3 pe-3">
                    <div>
                        <label className="position-absolute ps-3">Name</label>
                        <input className="form-control pt-4" type="text"
                               value={username}
                               onChange={e => {
                                   setUsername(e.target.value)
                               }}>
                        </input>
                    </div>

                    <div className="position-relative mt-3">
                        <label className="position-absolute ps-3">Bio</label>
                        <textarea className="form-control pt-4"
                                  rows={3}
                                  value={bio}
                                  onChange={e => {
                                      setBio(e.target.value)
                                  }}></textarea>
                    </div>

                    <div className="position-relative mt-3">
                        <label className="position-absolute ps-3">Location</label>
                        <input className="form-control pt-4" type="text"
                               value={location}
                               onChange={e => {
                                   setLocation(e.target.value)
                               }}></input>
                    </div>

                    <div className="position-relative mt-3">
                        <label className="position-absolute ps-3">Website</label>
                        <input className="form-control pt-4" type="text"
                               value={website}
                               onChange={e => {
                                   setWebsite(e.target.value)
                               }}></input>
                    </div>

                    <div className="position-relative mt-3 pb-5">
                        <label className="position-absolute ps-3">Birth date</label>
                        <input className="form-control pt-4" type="date"
                               value={dateOfBirth}
                               onChange={e => {
                                   setDateOfBirth(e.target.value)
                               }}></input>
                    </div>
                </div>
            </div>
        </div>

    );
};
{/*            <div className = "d-flex justify-content-between align-content-center">*/}
{/*                <div className="d-flex">*/}
{/*                <Link to="/tuiter/profile"><FontAwesomeIcon icon={faXmark}*/}
{/*                                                            className="me-2"/></Link>*/}
{/*            </div>*/}
{/*            <div className="col-5 d-flex fw-bolder">*/}
{/*            <div>*/}

{/*                Edit Profile*/}
{/*            </div>*/}

{/*            </div>*/}
{/*            <div className="col ">*/}
{/*                <Link className="btn btn-light rounded-pill fw-bolder border border-1 border-dark" to="/tuiter/profile" onClick={SaveProfile}>*/}
{/*                    Save*/}
{/*                </Link>*/}
{/*            </div>*/}
{/*            <div className="mt-2 ms-5">*/}
{/*            <img className="border border-solid border-white wd-width-profile" src="/images/nasa-6.jpg"/>*/}
{/*            </div>*/}
{/*            <div className="row position-relative">*/}
{/*                <div className="col-4 mb-3">*/}
{/*                <img className="rounded-pill w-25 position-absolute top-0" src="/images/reactlogo.jpg"/>*/}
{/*                </div>*/}
{/*                <div className="col-5">*/}

{/*                </div>*/}
{/*                <div className="col-3 position-absolute end-0">*/}

{/*                    <Link to="/tuiter/editprofile" className="btn btn-light rounded-pill fw-bolder mt-3 border border-1 border-dark">Edit Profile</Link>*/}

{/*                </div>*/}
{/*            </div>*/}
{/*            <div className="wd-margin">*/}
{/*            <div className="mt-5 ps-4 pe-3 wd-margin">*/}
{/*                <div className="fw-bolder fs-5">*/}
{/*                    {info.firstName + info.lastName}*/}
{/*                </div>*/}
{/*                <div>*/}
{/*                    {info.handle}*/}
{/*                </div>*/}
{/*                <div className="mt-3">*/}
{/*                    {info.bio}*/}
{/*                </div>*/}
{/*                <div className="mt-3 d-flex">*/}
{/*                    <div className="me-4">*/}
{/*                        <i className="bi bi-geo-alt me-2"></i>*/}
{/*                        {info.location}*/}
{/*                    </div>*/}
{/*                    <div className="me-4">*/}
{/*                        <i className="bi bi-balloon me-2"></i>*/}
{/*                        {info.dateOfBirth}*/}
{/*                    </div>*/}
{/*                    <div>*/}
{/*                        <i className="bi bi-calendar3 me-2"></i>*/}
{/*                        {info.dateJoined}*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*                <div className="mt-3 d-flex">*/}
{/*                    <div className="me-4">*/}
{/*                        {info.followingCount} Followers*/}
{/*                    </div>*/}
{/*                    <div className="me-4">*/}
{/*                        {info.followersCount} Following*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*            </div>*/}

{/*            </div>*/}

{/*        </div>*/}

{/*)*/}
{/*};*/}
export default EditProfileComponent;