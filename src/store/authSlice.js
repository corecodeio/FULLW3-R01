import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const logInAsync = createAsyncThunk(
    'auth/logInAsync',
    async()=>{
        try {
            const response = await fetch('https://reqres.in/api/users/2');
            const responseJson = await response.json();
            //console.log(responseJson)
            return { username: responseJson.data.first_name, email:responseJson.data.email, isAuth:true }
        } catch (error) {
            console.log(error);
            return { username: null, email:null, isAuth:false }
        }
    }
)
const token = localStorage.getItem('app_token');

const initialState ={
    isAuth:false,
    username:null,
    email:null,
    token: token ? token:null
}

export const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        logIn: (state,action)=>{
            const { username, email } = action.payload;
            console.log(action);
            //action.payload
            state.isAuth = true;
            state.username = username;
            state.email = email;
        },
        logOut: (state, action)=>{
            state.isAuth = false;
            state.username = null;
            state.email = null;
        }
    },
    extraReducers:{
        [logInAsync.fulfilled]:(state,action)=>{
            const { username, email, isAuth } = action.payload;
            state.isAuth = isAuth;
            state.username = username;
            state.email = email;
        }
    }
})

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;