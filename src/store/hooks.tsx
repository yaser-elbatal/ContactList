import {
    useDispatch,
    useSelector
} from 'react-redux';
import type {
    TypedUseSelectorHook,
} from 'react-redux'
import { AppDispatch, RootState } from './index';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// The purpose of the above code is to simply allow us to use useAppDispatch 
// and useAppSelector instead of the plain useDispatch and useSelector. It’s just 
// some more boilerplate you should not worry about.