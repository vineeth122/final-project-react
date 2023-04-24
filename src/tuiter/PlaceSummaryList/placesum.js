import React from "react";
const PlacesListItem = (
    {
        place = {
            "_id": 789,
            "city": "Washington DC",
            "image": "Teslaicon.png"
        }
    }
) => {
    // console.log(place.userName)
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    {/*<div>{place.userName} . {place.time}</div>*/}
                    <div className="fw-bolder">{place.city}</div>
                    {/*<div>{post.title}</div>*/}
                </div>
                <div className="col-2">
                    <img width={35} className="float-end rounded-3" src={`/images/${place.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PlacesListItem;
