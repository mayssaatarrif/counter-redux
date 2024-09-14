import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter",
    initialState:{value: 0, },
    reducers:{
        //counter/increment
        increment:(state)=>{
            state.value+=1;
        },
        //counter/decrement
        decrement:(state)=>{
            state.value-=1;
       },
       incrementByAmount:(state,action)=>{
        state.value += action.payload;      }
    },
    extraReducers:(builder) =>{
        builder.addCase(incrementAsync.pending,(state)=>{
            console.log(incrementAsync.pending )
        })
        builder.addCase(incrementAsync.fulfilled,(state,action)=>{
            state.value+=action.payload;
        });
    }, 
});
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return amount;
    }
  );  
export const{increment, decrement,incrementByAmount}= counterSlice.actions;
export default counterSlice.reducer;
/*the redux toolkit will define the name for us
 while in a async we have to define the name
manually*/
/*in async we define the actions with thunk then the reducers
while in sync we define the reducers then the actions*/ 