import React from "react";
import "./index.css";
import PostListSum from "../PostList";
import PlacesSummaryList from "../PlaceSummaryList";
import WhatsHappening from "./whats-happening";
import ReviewSummaryList from "../Homereviewsum";
import PostSummaryList from "../PostSummaryList"
const HomeComponent = () => {

    return(
    <>
        <div className="row">
            <div className="col-xxl-6 col-xl-9 col-lg-7 col-md col-sm">
            <WhatsHappening/>
            <PlacesSummaryList/>

            <ReviewSummaryList/>

                </div>
            <div className="col-xl">
                <PostSummaryList/>
            </div>
        </div>



            {/*<PostListSum/>*/}

    </>
);
};
export default HomeComponent;