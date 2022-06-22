import { ADD_CART,REMOVE_CART,SHOW_CART } from "./typing";

const CartReducer = (state, action) =>{
    switch(action.type){
        case ADD_CART:{
            return{
                ...state,
               itemCarts: [...state.itemCarts,action.payload] 
            }
        }
            case REMOVE_CART:{

            
                return{
                    ...state,
                    itemCarts : state.itemCarts.filter(item => item.id !== action.payload)
                }
            }
                case SHOW_CART:{
                    return{
                        ...state,
                        showCarts: !state.showCarts
                    }
                }
                    default:
                        return state;

    }
}
export default CartReducer
