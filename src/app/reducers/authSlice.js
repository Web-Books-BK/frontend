import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        id:'',
        userName:'',
        fullName: "",
        email: "",
        phone: "",
        address: "",
        role: null,
        createAt: null,
        updateAt: null
    },
    reducers:  {
        login: (state,action) => {
            state.id = action.payload.id;
            state.userName = action.payload.userName;
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.role = action.payload.role;
            state.createAt = action.payload.createAt;
            state.updateAt = action.payload.updateAt;
            state.loggedIn=true;
        },
        logout:(state)=>{
            state.loggedIn = false;
        }
    }
})

export const { login, logout} = authSlice.actions;

export default authSlice.reducer;
