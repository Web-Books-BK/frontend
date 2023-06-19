import axiosClient from "./axiosClient";

const hotelApi = {
    getListHotel: async () => {
        const response = await axiosClient.get('/rooms');
        return response;
    },
    getDetailHotel: async (id) => {
        const response = await axiosClient.get(`/rooms/${id}`);
        return response.data;
    }
}
export default hotelApi;
