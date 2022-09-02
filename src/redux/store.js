/*
@store
@reducer
-student store
-ADD
-Modify
*/

// store -> action -> reducer

import { createStore } from "redux";
import rootReducer from "./reducer";



// store.students[{id:'333',name:'Avinash',age:'33',batch:'dsff',course:'BCA'},{id:'334',name:'Naveen',age:'33',batch:'dsff',course:'BCA'}]

const store = createStore(rootReducer);
export default store;
