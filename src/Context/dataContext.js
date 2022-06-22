import React,{createContext,useReducer,useEffect} from "react";
import axios from "axios";

const dataContext = createContext();
export const DataProvider = ({children})=>{
    const initialState = {
        data: [],
        loading: false,
        error: null,
        count :0,
        cart : [],

    
    }
    const reducer =(state,action)=>{
        switch(action.type){
            case 'FETCH_SUCCESS':
              return{
                    ...state,
                    data:action.payload,
                    loading:false,
                   

              }
              case 'FETCH_ERROR':
                return{
                    ...state,
                    error:action.payload,
                    
                }
                case 'INCREMENT':
                return{
                    ...state,
                    count:state.count+1
                }
                case 'DECREMENT':
                return{
                    ...state,
                    count:state.count-1
                }
                case "UPDATE_DATA":
                 const updatePost =action.payload
                  const update     = state.data.map((update)=>{
                    if(update.id ===updatePost.id){
                        return updatePost
                    }
                    return update
                  })
                    return{
                        ...state,
                        data:update
                    }
                case "ADD_DATA":
                return{
                    ...state,
                    data:[...state.data,{
                        id:action.payload.id,
                        title:action.payload.title,
                        body:action.payload.body
                    
                    }
                    ]
                }
                case 'FILTER_DATA': 
                return{
                    ...state,
                    data:action.payload
                }
                case 'DELETE_DATA':
                return{ 
                    ...state,
                    data:state.data.filter(post => post.id !== action.payload)
                   }
                   case 'CHART':
                    return{
                    ...state,
                    cart: [...state.cart,{...action.payload,qty: 1}]

                    }
                default : return state
     
        }
    }
   
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
              
                dispatch({type:'FETCH_SUCCESS',payload:response.data})
            } catch (error) {
               
                dispatch({type:'FETCH_ERROR',payload:error})
            }
        }
        fetchData()
        },[])
    const [state,dispatch]=  useReducer(reducer,initialState);
    return(
        <dataContext.Provider value={{state,dispatch}}>
            {children}
        </dataContext.Provider>
    )
}
export default dataContext;