import { createStore, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middelware = [thunk]


//rootReducer : type : function 
//console.log('rootReducer() :', rootReducer());
// on calling rootReducer()
// export default function(state = initailState , action){
//     switch(action.type){
//         case GET_PROFILES:
//             return {
//                 ...state
//             }
//         default : 
//             return state
//     }
//  }


//const store = createStore(rootReducer, initialState , applyMiddleware(...middelware))


const store = createStore(rootReducer, initialState ,
compose(
    applyMiddleware(...middelware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


export default store
