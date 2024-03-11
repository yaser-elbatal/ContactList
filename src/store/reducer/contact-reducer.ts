

import { createReducer } from '@reduxjs/toolkit';
import { toggleFavAction } from '../action';

const initailLangState = {
    favList: [
        {
            givenName: 'yasser',
            familyName: 'elbatal',
            phoneNumbers: [{ number: "+20 1029991120" }],
            emailAddresses: { email: "yaserelbata7@gmail.com" },
            thumbnailPath: ''
        }
    ],
    pending: true,
    error: false,
};

export const favContactReducer = createReducer(initailLangState, builder => {
    builder
        .addCase(toggleFavAction.pending, state => {
            state.pending = true;
            state.error = false;
        })
        .addCase(toggleFavAction.fulfilled, (state, action: any) => {

            state.pending = false;
            state.favList = [action?.payload?.payload]
        })
        .addCase(toggleFavAction.rejected, (state, { payload }: any) => {

            state.pending = false;
            state.error = payload;
        });
});

