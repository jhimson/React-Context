/* eslint-disable default-case */
import React from 'react';


const categoriesReducer = (state, action) => {
    switch(action.type){
        case "GET_CATEGORIES":
            return {...state, categories: action.payload}
            break;
            
        case "ADD_CATEGORY":
            return {...state, categories: [...state.categories, action.payload]}
            break;
        
        case "CATEGORIES_ERROR":
            return {...state, categoriesError: action.payload}
            break;
    
        default:
            return state
    }
}

export default categoriesReducer