import * as ActionTypes from './ActionTypes';
import axios from 'axios'

export const fetchHomeCategories = () => {
    return (dispatch, getState) => {
        axios.get('/category/get-parents')
    }
}

export const fetchHomeProducts = () => {
    return (dispatch, getState) => {
        axios.get('/category/get-parents')
    }
}

