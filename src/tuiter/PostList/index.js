import React from "react";
import {useSelector} from "react-redux";
import Postiteml from "./Postitem.js";



const PostListSum = () => {
    const postl= useSelector(state => state.tuitsl)
    return(
        <ul className="list-group">
            {
                postl.map(post =>
                    <Postiteml
                        key={post._id} post1={post}/> )
            }
        </ul>
    );
};
export default PostListSum;