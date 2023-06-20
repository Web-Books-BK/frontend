import axiosClient from "./axiosClient";
const reservationApi = {
    bookingHotel: async (data) =>{
        const response = axiosClient.post('/reservations',data);
        return response;
    }
}
export default reservationApi
