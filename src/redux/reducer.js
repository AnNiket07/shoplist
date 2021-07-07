import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'

let initialState = {shops:[]};

const addShopReducer = createSlice({
  name: "shops",
  initialState,
  reducers: {
    //adding shops
    addShops: (state, action) => {
      state.shops.push(action.payload);
      // return state;
    },
    filterShops: (state, action) => {
      // console.log(state);
      const {shops}=state;
      state.shops = shops.filter((shop) => shop.area === action.payload.Area);
    },
  },
});

// const filterShopReducer = createSlice({
//   name: "areashops",
//   initialState,
//   reducers: {
//     //adding shops
//     filterShops: (state, action) => {
//       return state.filter((areashop) => areashop.area !== action.payload);
//     },
//   },
// });

export const { addShops, filterShops } = addShopReducer.actions;
export const reducer = addShopReducer.reducer;
// const shopreducer = addShopReducer.reducer;
// const filterReducer = filterShopReducer.reducer;
// export const reducer = combineReducers({ shopreducer,filterReducer })

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
