/* eslint-disable default-case */
import React from 'react';


const itemsReducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return {...state,
                items: [...state.items, action.payload]
            }
            break;
        default:
            return state
    }
}

export default itemsReducer;