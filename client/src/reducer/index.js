//-------import actions


//-------initial State
const initialState = {
    operations: [],
    operations_to_render: [],
    balance: 0,
    categories: [],
    user: "",
    isLoged: false
}

function rootReducer (state = initialState, action) {
    switch (action.type){
        default:
             return state
    }
}

export default rootReducer

