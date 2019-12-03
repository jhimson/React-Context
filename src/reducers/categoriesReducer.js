/* eslint-disable default-case */
import React from 'react';


const categoriesReducer = (state, action) => {
    switch(action.type){
        case "ADD_CATEGORY":
            return {...state, categories: [...state.categories, action.payload]}
            break;
    
        default:
            return state
    }
}

export default categoriesReducer