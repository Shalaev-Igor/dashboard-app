export const ADD_FILTERS = "ADD_FILTERS";
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const addFilters = (filter) => ({
    type: ADD_FILTERS,
    filter,
});

export const removeFilters = (filter) => ({
    type: REMOVE_FILTERS,
    filter,
});

export const clearFilters = {
    type: CLEAR_FILTERS,
};