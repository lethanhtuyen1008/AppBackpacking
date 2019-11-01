import axios from 'axios';
export const getTourListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: "https://evening-refuge-27360.herokuapp.com/api/tours"
    })
    return response;
}
