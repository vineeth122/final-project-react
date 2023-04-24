import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PlacesListItem from "./placesum";
import {getTripsThunk} from "../../services/trip-thunks";

const PlacesSummaryList = () => {
    const {placesl, loading} = useSelector(state => state.places)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getTripsThunk())},[])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                placesl.map(place =>
                    <PlacesListItem
                        key={place._id}
                        place={place}
                    />
                )
            }
        </ul>
    );
};
export default PlacesSummaryList;