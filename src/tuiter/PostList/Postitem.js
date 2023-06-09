import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faComment, faRetweet, faHeart, faArrowUpFromBracket,faCircleCheck,faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {useDispatch, useSelector} from "react-redux";
import {liketuit, unliketuit} from "../tuits/tuitsl-reducer";
import {deleteTuitThunk,updateTuitThunk} from "../../services/tuits-thunks";

const Postiteml = ( {post1}) => {
    const dispatch = useDispatch();

    const liketuithandler = (tuit) => {
        dispatch(updateTuitThunk(
            {
            ...tuit,
            likes: tuit.likes + 1,
                liked: true
        }))
    }
    const unliketuithandler = (tuit) => {
        dispatch(updateTuitThunk(
            {
                ...tuit,
                dislike: tuit.dislike + 1
            }))
    }
    const deletetuithandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-1">
                            <img className="float-start rounded-pill wd-width me-2 border border-solid border-white"
                                 src={`/images/${post1.image}`}/>
                        </div>
                        <div className="float-start col me-4 pe-2">
                            <div className="text-black fw-bolder d-inline">{post1.userName}</div>
                            <div className="d-inline"><FontAwesomeIcon icon={faCircleCheck} className="text-info me-2"/></div>
                            <div className="d-inline"> <i className="bi bi-x-lg float-end"
                                                          onClick={() => deletetuithandler(post1._id)}></i></div>
                            <div className="d-inline text-secondary">{post1.time}</div>
                            <div className="text-black">{post1.body}</div>

                        </div>
                        <div className="row">

                            <div className="ms-4 col  mt-3">
                                <div className="rounded border border-solid border-light">
                                    <img className="w-100" src={`/images/${post1.postimage}`}/>
                                    <div className="text-black mt-0">{post1.title}</div>
                                    <div className="text-secondary">{post1.subtitle}</div>
                                    <div className="d-inline text-secondary"><i className="fa-solid fa-paperclip"></i></div>
                                    <div className="d-inline text-secondary">{post1.link}</div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 btn-danger"><FontAwesomeIcon icon={faComment}
                                                                                     className="me-2"/>{post1.comment}</div>
                                    <div className="p-2 bd-highlight"><FontAwesomeIcon icon={faRetweet}
                                                                                       className="me-2"/>{post1.retweet}</div>

                                    <div className="p-2" onClick={() => dispatch(updateTuitThunk(
                                        {
                                            ...post1,
                                            like: post1.like + 1,
                                            liked: true
                                        }))}><FontAwesomeIcon icon={faHeart}
                                                                                                                 className="me-2 text-danger"/>{post1.like}</div>

                                    <div className="p-2" onClick={() => dispatch(updateTuitThunk(
                                        {
                                            ...post1,
                                            dislike:post1.dislike + 1
                                        })) }><FontAwesomeIcon icon={faThumbsDown}
                                                                                                                   className="me-2"/>{post1.dislike}</div>



                                    <div className="p-2 bd-highlight"><FontAwesomeIcon icon={faArrowUpFromBracket}
                                                                                       className="me-2"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>



    );
};


export default Postiteml;