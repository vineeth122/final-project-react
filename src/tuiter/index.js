import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import PostSummaryList from "./PostSummaryList";

function Tuiter() {
    return (
        <div className="container pt-1">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <NavigationSidebar active="explore"/>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md col-sm">
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                                 </Routes>
                </div>


                <div className="d-none d-lg-block  col-xxl  col-xl col-lg mt-3 wd-width">
                    <Routes>
                        <Route path="home"    element={<PostSummaryList/>}/>
                        <Route path="explore" element={<WhoToFollowList/>}/>
                    </Routes>


                </div>
            </div>

        </div>

        // <div className="row mt-2">
        //     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        //         <NavigationSidebar active="explore"/>
        //     </div>
        //     <div className="col-10 col-md-10 col-lg-7 col-xl-6"
        //          style={{"position": "relative"}}>
        //         <Routes>
        //             <Route path="home"    element={<HomeComponent/>}/>
        //             <Route path="explore" element={<ExploreComponent/>}/>
        //         </Routes>
        //     </div>
        //     <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        //         <WhoToFollowList/>
        //     </div>
        // </div>
    );
}

export default Tuiter
