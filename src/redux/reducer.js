import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const addShopReducer = createSlice({
    name: "shops",
    initialState,
    reducers:{
        //adding shops
        addShops:(state,action) => {
            state.push(action.payload);
            return state;
        }   
    }
})

export const {addShops } = addShopReducer.actions;
export const reducer = addShopReducer.reducer;

//   if (action.type === "ADD") {
//     return {
//       ...state,
//       shops: state.shops.push({
//         shopname: state.shopname,
//         area: state.area,
//         category: state.category,
//         opendate: state.opendate,
//         closedDate: state.closedDate,
//       }),
//     };
//   }
//   return state;
// }


// shops: [
    //       {
    //         shopname: "",
    //         area: "",
    //         category: "",
    //         opendate: "",
    //         closedDate: "",
    //       },
    //   ],