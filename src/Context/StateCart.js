import cartContext from "./CartContext";
import CartReducer from "./CartReducer";
import{useContext,useReducer} from 'react'
import {ADD_CART,REMOVE_CART,SHOW_CART} from './typing'
const StateCart = ({children})=>{
    const initialState ={
        itemCarts:[],
        showCarts : false,
    }
    const [state,dispatch] = useReducer(CartReducer,initialState)
    const addProd = item => {
      dispatch({type:ADD_CART, payload: item})
    }
    const removeProd = id => {
       dispatch({type:REMOVE_CART, payload:id})

    }
    const showHideCarts = () => {
        dispatch({type:SHOW_CART})
    }
    return(
        <cartContext.Provider value={{ 
            itemsCarts : state.itemCarts,
            showCarts  : state.showCarts,
            addProd,
            removeProd,
            showHideCarts
         }}>
            {children}
        </cartContext.Provider>
    )
}

export default StateCart