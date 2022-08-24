
const intialData = {
    counter: 0,
    addedData: []
}
const reducer = (state = intialData, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state.counter + 1;
        case 'DECREMENT':
            return state.counter - 1;
        case 'RESET':
            return 0
        case 'ADD_DATA':
            return {
                ...state,
                addedData: [...state.addedData, action.payload]
            }
        case 'DELETE_DATA':
            console.log("naveen=>",action.payload)
            let ind = state.addedData.findIndex((x)=>x.id===action.payload);
            let deleteData;
            if(ind !== -1){
                deleteData = state.addedData.splice(ind,0);
            }
            console.log("reducer",action.payload)
            return{

            }
        default: return state
    }
}
export default reducer;