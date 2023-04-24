import axios from 'axios';



const API_BASE = "http://localhost:4000/api"

const TRIP_API = `${API_BASE}/trips`;

export const getnewplaces = async () => {

    const response = await  axios.get(TRIP_API+'/places');
    const places = response.data;
    return places;
}

