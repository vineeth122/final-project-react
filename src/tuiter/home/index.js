import React from "react";
import "./index.css";
import PostListSum from "../PostList";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {

    return(
    <>
        <div className="row">
            <WhatsHappening/>
            <PostListSum/>
        </div>
    </>
);
};
export default HomeComponent;