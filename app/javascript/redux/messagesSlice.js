import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  isLoading: true,
};

export const fetchMessage = createAsyncThunk('message/fetchMessage', async () => {
  const response = await fetch('/api/random');
  const data = await response.json();
  return data;
});

const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMessage.fulfilled, (state, action) => ({
      ...state,
      message: action.payload.greeting,
      isLoading: false,
    }));
    builder.addCase(fetchMessage.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export default messagesSlice.reducer;