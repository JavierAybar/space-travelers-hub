import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    return response.data.map(({
      id, rocket_name: name, description, flickr_images: flickrImages,
    }) => ({
      id,
      name,
      description,
      flickrImages,
    }));
  } catch (error) {
    return error;
  }
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: { rockets: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        rockets: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default rocketsSlice.reducer;
