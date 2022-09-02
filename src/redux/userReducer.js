import { ADD_STUDENT, MODIFY_STUDENT } from "./action";

const initialState = {
  students: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT: {
      return { ...state, user: state.students.push(action.payload) };
    }
    case MODIFY_STUDENT: {
      console.log("inside modify");

      const userIndex = state.students?.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(userIndex);
      state.students[userIndex] = action.payload;
      return state;
    }

    default:
      return state;
  }
};

// payload -> extra information carry

export default userReducer;

// react -> table row -> id -> edit function (id)\

// store.students[{id:'333',name:'Avinash',age:'33',batch:'dsff',course:'BCA'},{id:'334',name:'Naveen',age:'33',batch:'dsff',course:'BCA'}]

// modify -> {id:'334',name:'Naveen',age:'33',batch:'dsff',course:'BCA'} -> data= {id:'334',name:'Naveen',age:'33',batch:'dsff',course:'BTECh'} -> store.students[userIndex] =data
