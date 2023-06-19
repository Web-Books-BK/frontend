import axiosClient from "./axiosClient";

const authApi = {
    login: async (data) => {
        const response = await axiosClient.post('/signin',data);
        return response;
    },
    logout: async () => {
        const response = await axiosClient('logout');
        return response.data
    }
}

export default authApi;
