import axiosClient from "./axiosClient";

const authApi = {
    signup: async (data) => {
        const response = await axiosClient.post('/signup',data);
        return response;
    },
    login: async (data) => {
        const response = await axiosClient.post('/signin',data);
        return response;
    },
    logout: async () => {
        const response = await axiosClient('logout');
        return response.data;
    },
    getUserInfo: async () =>{
        const response = await axiosClient.get('/users');
        return response;
    }
}

export default authApi;
