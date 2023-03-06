import React from "react";
import postl from './postl.json';
import Postiteml from "./Postitem.js";



const PostListSum = () => {
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