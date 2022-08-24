// export const increment = () =>{
//     return type:'INCREMENT'
// }
export const increment = () => ({type:'INCREMENT'});
export const decrement = () =>({type:'DECREMENT'});
export const reset = () =>({type:'RESET'});
export const addData = (data) =>({
    type:'ADD_DATA',
    payload:data
});
export const deleteData = (id) =>({
    type:'DELETE_DATA',
    payload:id
})