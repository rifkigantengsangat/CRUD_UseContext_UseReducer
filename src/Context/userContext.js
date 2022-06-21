// import { createContext,useContext,useReducer,useState} from "react";
// import axios from "axios";
// import dataContext from "./dataContext";

// const userContext = createContext()
// export const userProvider = ({children})=>{
//     const {state} = useContext(dataContext)
//     console.log(state)
//     const initialState = {
//         data: state.data
    
        
//     }
    
//     const reducer = (state,action)=>{
//         switch(action.type){
//             case "UPDATE_POST":
//                 const updatePost =action.payload
//             return{
//                 ...state,
//                 data:state.data.map(post =>{
//                     post.id ===updatePost.user.id?updatePost : data
//                 })
    
//             }
//             case"DELETE_POST": 
//             return{
//                 ...state,
//                 data:state.data.filter(post => post.id !== action.payload)
//             }
//         }
//     }
//     const [data,dis] =useReducer(reducer,initialState)
//     return(
//         <userContext.Provider value={{data,dis}}>
//             {children}
//         </userContext.Provider>
//     )
// }


// export default userContext;