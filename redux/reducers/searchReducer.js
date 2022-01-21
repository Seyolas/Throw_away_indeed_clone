
const initalState = {
    JobTitleQuery:'',
    LocationQuery:'',
    selectedItemId:'',
    selectedItem:''
    
}

export const searchReducer=(state=initalState,action)=>{
    
    if (action.type==='SET_QUERY') {
    return {...state, JobTitleQuery:action.payload.payload.jobtitle, LocationQuery:action.payload.payload.location}
    }
    
    if (action.type === 'SET_SELECTED_ITEM') {
        return {...state, selectedItem:action.payload.qualifications_and_requirements,selectedItemId:action.payload.id}
    }


    return state;

  }

  