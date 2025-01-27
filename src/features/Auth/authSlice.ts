import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
 
  


const initialState = { 
  user:   null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  userToken:null,
  message: '',
  error: '',


  signUpdata:   [],
  signUpisError: false,
  signUpisSuccess: false,
  signUpisLoading: false, 
  signUpmessage: '', 
}
 

// Login user
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    return await authService.login(data)

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message || error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})

 // Sign Up
export const signUp = createAsyncThunk('register/signUp', async ( value,thunkAPI) => {
  try { 
    return await authService.signUp(value)
  } catch (error:any) {
    const message = error?.response?.data?.message ||
    (error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
    return thunkAPI.rejectWithValue(message)
  }
})
  

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {   
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = '' 

      state.signUpisLoading = false
      state.signUpisSuccess = false
      state.signUpisError = false
      state.signUpmessage = ''  

    }
  },

  extraReducers: (builder) => {
    builder 
      //  Login
      .addCase(login.pending, (state) => {
        state.isLoading = true 
      }) 
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        state.userToken = action.payload.token
      }) 
      .addCase(login.rejected, (state:any, action) => {
        state.isLoading  = false
        state.isError  = true
        state.message  = action.payload
        state.data  = [] 
      })

    
      .addCase(signUp.pending, (state) => {
        state.signUpisLoading = true 
      })
      .addCase(signUp.fulfilled, (state:any, action) => {
        state.signUpisLoading = false
        state.signUpisSuccess = true
        state.signUpdata = action.payload 
      })
      .addCase(signUp.rejected, (state:any, action) => {
        state.signUpisLoading = false
        state.signUpisError = true
        state.signUpmessage = action.payload
        state.signUpdata = [] 
      })
    
      
      
  },
})

export const { reset  } = authSlice.actions
export default authSlice.reducer