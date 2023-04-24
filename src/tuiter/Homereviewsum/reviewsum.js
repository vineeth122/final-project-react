import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ReviewsListItem = (
    {
        review = {
            "_id": 234,
            "city": "New York",
            "comment": "Great city with fantastic vibes on the east coast of USA",
            "rating": 5,
            "author": "Mark"
        }
    }
) => {
    // console.log(place.userName)
    return(

        <ListGroup.Item key={review._id}>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}/5</p>
            <p>Author: {review.author}</p>
        </ListGroup.Item>

        // <li className="list-group-item">
        //     <div className="row">
        //         <div className="col-10">
        //             {/*<div>{place.userName} . {place.time}</div>*/}
        //             <div className="fw-bolder">{place.city}</div>
        //             {/*<div>{post.title}</div>*/}
        //         </div>
        //         <div className="col-2">
        //             <img width={35} className="float-end rounded-3" src={`/images/${place.image}`}/>
        //         </div>
        //     </div>
        // </li>
    );
};
export default ReviewsListItem;
