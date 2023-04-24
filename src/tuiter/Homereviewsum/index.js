import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewsListItem from "./reviewsum";
import {getTripsThunk} from "../../services/trip-thunks";
import { Card, ListGroup } from "react-bootstrap";

const ReviewSummaryList = () => {
    // const {reviews, loading} = useSelector(state => state.hreviewsl)
    // const dispatch = useDispatch();
    // useEffect(() => {dispatch(getTripsThunk())},[])
    const reviews = useSelector(state => state.hreviewsl)
    return(

        <Card>
            <Card.Header>Reviews</Card.Header>
            <ListGroup variant="flush">
                {reviews.map(review =>
                    <ReviewsListItem key={review._id} review={review}
                    />
                    )}
            </ListGroup>
        </Card>

        // <ul className="list-group">
        //     {
        //         loading &&
        //         <li className="list-group-item">
        //             Loading...
        //         </li>
        //     }
        //     {
        //         placesl.map(place =>
        //             <PlacesListItem
        //                 key={place._id}
        //                 place={place}
        //             />
        //         )
        //     }
        // </ul>
    );
};
export default ReviewSummaryList;