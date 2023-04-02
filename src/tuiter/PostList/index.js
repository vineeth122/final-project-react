import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Postiteml from "./Postitem.js";
import {findTuitsThunk}
    from "../../services/tuits-thunks";



const PostListSum = () => {

    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {


                tuits.map(tuit =>
                    <Postiteml
                        key={tuit._id} post1={tuit}/> )
            }
        </ul>
    );
};
export default PostListSum;