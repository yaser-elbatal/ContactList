import { createAction, createAsyncThunk } from "@reduxjs/toolkit";




export const toggleFavAction = createAsyncThunk(
    'toggleFavAction',
    async ({ item }: any) => {

        console.log('====================================');
        console.log('items', item);
        console.log('====================================');
        return {
            payload: item,
        };

    });


