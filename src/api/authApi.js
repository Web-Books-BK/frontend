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
    }
}

export default authApi;
