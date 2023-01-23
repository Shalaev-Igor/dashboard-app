import { ADD_FILTERS, REMOVE_FILTERS, CLEAR_FILTERS } from "./filter-action";

export const filterReducer = (state = [], action) => {
    switch (action.type){

        case ADD_FILTERS : {
            return [...state, action.filter]
        }

        case REMOVE_FILTERS : {
            return state.filter(item => item !== action.filter)
        }

        case CLEAR_FILTERS : {
            return [];
        }   

        default : {
            return state;
        }
    }
}