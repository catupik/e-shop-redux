import { createSlice } from '@reduxjs/toolkit'

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        selectedCategory: 'All'
    },
    reducers:{
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const {setSelectedCategory} = goodsSlice.actions;
export const {filterCategory} = goodsSlice.actions;
export const getSelectedCategory = state => state.goods.selectedCategory;
export default goodsSlice.reducer;