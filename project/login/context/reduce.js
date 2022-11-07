export const initalvalue={task:[]}
//task:[]
export const stateReducer =(state,action)=>{

console.log(action)
console.log(state);

 switch(action.type){
    case "addtask":
        return{
            
           task:action.payload
 }
 case "deletefun":
    console.log(state)
    return{
        ...state,
        task: state.task.filter((item)=>item.id!==action.payload)
        
    }
  case "update":
    console.log(action.payload)
    return{
        ...state,
        task: [...state.task.filter((item)=>item.id !== action.payload.id),action.payload]
    }

   default: return state;
}

}


