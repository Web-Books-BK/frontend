import axiosClient from "./axiosClient";

const hotelApi = {
    getListHotel: async () => {
        const response = await axiosClient.get('/rooms');
        return response;
    },
    getDetailHotel: async (id) => {
        const response = await axiosClient.get(`/rooms/${id}`);
        return response;
    },
    getListMyHotel: async () => {
        const id = sessionStorage.getItem('id');
        const response = await axiosClient.get(`/rooms?owner=${id}`);
        return response;
    },
    getListRentedHotel: async () => {
        const response = await axiosClient.get('/users')
        return response;
    },
    deleteRentedHotel: async (id) => {
        const response = await  axiosClient.delete(`/reservations/${id}`)
        return response;
    },
    deleteMyHotel: async (id) => {
        const response = await axiosClient.delete(`/rooms/${id}`);
        return response;
    }
}
export default hotelApi;
