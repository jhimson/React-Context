import React,{ useReducer} from 'react';

// ? Custom React Contexts Providers
import CategoriesCTXProvider from './contexts/CategoriesCTX'
import ItemsCTXProvider from './contexts/ItemsCTX'

const Store = props => {
    return (
        <CategoriesCTXProvider>
        <ItemsCTXProvider>
            {props.children}
        </ItemsCTXProvider>
        </CategoriesCTXProvider>
    )
}

export default Store;


